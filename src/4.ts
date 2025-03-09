class ProjectA {
  constructor(public name: string) {}
}

function main(): void {
  const project = new ProjectA("projec-a");
  console.log(`Name of the project is ${project.name}`);
}
