// This example demonstrates how to manage versions with Git and GitHub.
// The changes made in this example are tracked by the user.
// Any modifications done locally or pushed to the repository will be tracked by both users.

import { git, gitRepository } from '@actions/github';

const origin = git.clone('https://github.com/your-username/project-a.git', 'origin');

console.log('Git push changes...');
git.push(origin, {
  remote: 'origin',
});

// Commit changes
const commitMessage = `Update project a version control ${Date.now}`;
git.commit({ message: commitMessage });

// Push the updated branch to the main repository
git.push({
  origin,
  // Only for updates in this project
  ref?: gitReference('main'),
});
