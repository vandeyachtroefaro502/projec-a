import { createRepo } from 'git-repo';

createRepo({
  name: "projec-a",
  owner: "user",
  branch: "main"
}).then(repo => {
  console.log(`Repository created successfully at ${repo.url}`);
});
