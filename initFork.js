import fs from 'fs';
import {execSync} from 'child_process'

console.log('Setting up workspace...');
fs.appendFileSync('.gitignore', '.env\nmkcert.exe');
execSync('npm i');
execSync('./mkcert.exe -install');
execSync('./mkcert.exe localhost');
console.log('Done!');