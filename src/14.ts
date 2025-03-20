let repoName = "projec-a"; // Replace with your own repository name

// Function to update the repository's metadata
function updateRepoMetadata() {
  let newVersion = "1.0";
  
  // Add a new tag and commit message
  const tagCommitMessage = `feat: Update version to ${newVersion} (PR #${repoName});`;
  const updatedTag = `${newVersion} ... master`;
  
  // Push the changes using the new tag
  fetch(`https://github.com/${repoName}/git/compare/${repoName}-master...${tagCommitMessage}`, {
    method: "POST",
    headers: { "Content-Type": "application/vnd.github.v3+json" },
    body: updatedTag,
  });
}

updateRepoMetadata();
