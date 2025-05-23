let git = require('git'); // Add the `git` package at the top of your file

const commit = async () => {
  try {
    await git.commit({
      author: 'Author',
      message: 'First commit',
      remote: 'origin'
    });
    console.log('Commit successfully made.');
  } catch (error) {
    console.error(error);
  }
};

commit();
