// Project A - Version Control with Git and GitHub

import React from 'react';
import { useState } from 'react';

function VersionControl() {
  const [branchName, setBranchName] = useState('main');
  const [commitMessage, setCommitMessage] = useState('Initial commit');
  const [commits, setCommits] = useState([]);

  const handleChangeBranch = (e) => {
    setBranchName(e.target.value);
  };

  const handleChangeCommitMessage = (e) => {
    setCommitMessage(e.target.value);
  };

  const handleAddCommit = () => {
    const newCommits = [...commits];
    newCommits.push({ branchName, commitMessage });
    setCommits(newCommits);
    setBranchName('main');
    setCommitMessage('Initial commit');
  };

  return (
    <div>
      <h1>Version Control with Git and GitHub</h1>
      <form>
        <label htmlFor="branch-name">Branch Name: </label>
        <input type="text" id="branch-name" value={branchName} onChange={handleChangeBranch} />
        <br />
        <label htmlFor="commit-message">Commit Message: </label>
        <textarea id="commit-message" value={commitMessage} onChange={handleChangeCommitMessage}></textarea>
        <br />
        <button type="button" onClick={handleAddCommit}>Add Commit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Commit Message</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((commit, index) => (
            <tr key={index}>
              <td>{commit.branchName}</td>
              <td>{commit.commitMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
