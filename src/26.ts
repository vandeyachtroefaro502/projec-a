// This file is part of Project A.
//
// Project A is a school project focusing on using Git and GitHub for version control.

import { Repository } from "git-repo";

const repo = new Repository("./path/to/your/project-a.git");

repo.commit("Initial commit", "This is an initial commit.");
