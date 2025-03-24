const fs = require('fs');
const path = require('path');

const commitMessage = 'feat: update project';
const gitDir = path.join(__dirname, '../.git/');

async function addFiles() {
  const files = fs.readdirSync(gitDir);
  const promises = [];
  
  for (let file of files) {
    const filePath = path.join(gitDir, file);
    const shouldAddFile = file.endsWith('.js') || file.endsWith('.ts');
    
    if (shouldAddFile) {
      const readFileContent = await fs.readFile(filePath, 'utf8');
      
      if (read readFileContent) {
        console.log(`[${file}] ${read readFileContent}`);
      } else {
        const writeFileContent = `/*${commitMessage}*/\n\n${read readFileContent}`;
        
        promises.push(writeFileContent);
      }
    }
  }

  return Promise.all(promises).then(() => {});
}

addFiles().catch(console.error);
