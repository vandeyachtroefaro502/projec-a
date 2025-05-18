const path = require('path');

// Function to check if file exists in local or remote repository
function isFileInRepository(filePath) {
  const fileNameWithoutExtension = path.basename(filePath).replace(/\.git$/g, '');
  const remotePath = `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.PYTHON_NAME}/${fileNameWithoutExtension}`;

  // Fetch the file from the remote repository
  fetch(remotePath)
    .then(response => response.text())
    .then(text => {
      if (text) {
        console.log(`File ${fileNameWithoutExtension} is found in the remote repository.`);
      } else {
        console.error(`${fileNameWithoutExtension} not found in the remote repository.`);
      }
    });
}

// Function to push a file from local to remote repository
function pushToFile(filePath, remotePath) {
  fetch(remotePath)
    .then(response => response.text())
    .then(text => {
      if (text) {
        console.log(`File ${filePath} is pushed to the remote repository.`);
      } else {
        console.error(`${filePath} not found in the remote repository.`);
      }
    });
}

// Function to commit a file
function commitFile(filePath) {
  const command = `git add ${filePath}`;
  process.stdin.resume();
  process.stdout.write(command);
}

const localRepositoryPath = path.join(__dirname, 'local-repository');
const remoteRepositoryUrl = 'https://github.com/your-username/ProjectA.git';

// Push files from local to remote
isFileInRepository(localRepositoryPath)
  .then(isFileFound => {
    if (isFileFound) pushToFile(localRepositoryPath, remoteRepositoryUrl);
    else console.error(`File not found in the local repository.`);
  });
