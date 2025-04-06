// This is a simple example to demonstrate how Git and GitHub can be used in a TypeScript project.
// First, ensure you have Node.js installed on your machine. Then, run the following command to initialize a new Git repository:

// Initialize a new Git repository (without a commit)
git init

// Add files to the repository
git add .

// Commit changes with a message indicating "Initial commit"
git commit -m "Initial commit"

// Push the changes to GitHub using the 'gh' command
# Note: You need to replace 'username' and 'repo-name' with your actual username and repository name.
# gh pr user:repo-name branch:master push -u

// Create a new repository on GitHub
gh pr user:repo-name branch:main create-repo

// Make changes in the project directory
cd projec-a

// Update the .gitignore file to exclude files you no longer need
nano .gitignore

// Add and commit these excluded files
git add -A
git commit -m "Exclude specific files"

# If not already added, then run:
npm install

# Create a new branch for your changes
git checkout -b my-branch-name

// Make the changes to the project code
diff --git a/your-file.js b/another-file.js
# Add or modify the code here
git add .
git commit -m "Add or modify code"

# Push the changes to GitHub (if you have the 'gh' command installed)
# gh pr user:repo-name branch:master push -u

// Commit your changes on the main branch
git commit -m "Commit main branch"
