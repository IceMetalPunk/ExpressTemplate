import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';

dotenv.config();
const ENV = process.env.NODE_ENV || 'development';

const methods = Object.freeze({
    development: (app, port) => new Promise(res => {
        const server = https.createServer(
            {
                key: fs.readFileSync('localhost-key.pem'),
                cert: fs.readFileSync('localhost.pem')
            },
            app
        );
        server.listen(port, () => res({ secure: true, server, env: ENV }));
    }),
    production: (app, port) => new Promise(res => {
        app.listen(port, () => res({ secure: false, server: app.server, env: ENV }));
    })
});

const forceSSL = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && req.protocol !== 'https') {
        return res.redirect(`https://${req.get('Host')}${req.url}`);
    }
    return next();
};

export default (app, port) => {
    app.use(forceSSL);

    if (ENV in methods) {
        return methods[ENV](app, port);
    }

    return Promise.reject(ENV);
}