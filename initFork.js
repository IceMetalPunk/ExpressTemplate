import fs from 'fs';
import {execSync} from 'child_process'

console.log('Setting up workspace...');
fs.appendFileSync('.gitignore', '.env\nmkcert.exe');
execSync('npm i');
execSync('mkcert.exe -install');
execSync('mkcert.exe localhost');
execSync('git add --all && git rm --cached mkcert.exe && git rm --cached .env && git commit -m "Setup workspace"');
console.log(' ');
console.log('Done! Remember to --force the first push after setup!');