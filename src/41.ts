// 1. Initialize your repository with `git init`.
// 2. Add your source files into the project directory.
// 3. Commit and push changes to GitHub.

import { cloneDeep } from 'lodash';

const repoDir = process.cwd(); // Project root directory

// Clone the repository
cloneDeep(repoDir, './clone/');

// Create a new file for your project
fs.writeFileSync('./gitignore', `**/*.js`);
fs.writeFileSync(`./package.json`, JSON.stringify({ "name": "projec-a" }, null, 2));

// Add your files into the project directory
fs.appendFile('src/main.js', `import * as fs from 'node:fs';\n\nconst filePaths = [\n${require('./gitignore')}\n];\nconst paths = require('../package.json').paths;\nfor (let filePath of filePaths) {\n  if (!filePath.startsWith('../')) {\n    filePath = `${paths.``}${path.replace(/[/\\]*/g, '')}`; // add path with backticks
  }\n\nfs.appendFile(filePath, `/** @file */\nexport const main = ${JSON.stringify(filePaths)};\n`);
await fs.promises.writeFile(`./gitignore`, `**/*.js`);
await fs.promises.writeFile(`./package.json`, JSON.stringify({ "name": "projec-a" }, null, 2));

// Commit the changes
await git.commit('Initial commit', 'projec-a');

// Push to GitHub
const remote = 'https://github.com/yourusername/projecta.git';
git.push(remote, { --force });
