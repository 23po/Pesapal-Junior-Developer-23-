import fs from 'fs';
import myDiff from "./myDiff";

function myPatch (fileA, fileB) {

    const a = fs.readFileSync(fileA, 'utf8');
    const b = fs.readFileSync(fileB, 'utf8');

  const diffLines = myDiff(a, b).split("\n");


  const changes = []

 for (const line of diffLines) {
    if (line.startsWith('- ')) {
        changes.push({index: indexA, type: 'delete', line: line.slice(2) });
  
      } else if (line.startsWith('+ ')) {
         changes.push({index: indexB, type: 'insert', line: line.slice(2) });
     
 }
}
 
let contentsB = a.split('\n');

changes.forEach(change => {
  if (change.type === 'delete') {
    contentsB.splice(change.index - 1, 1);
  } else if (change.type === 'insert') {
    contentsB.splice(change.index - 1, 0, change.line);
  }
});


fs.writeFileSync(fileB, contentsB.join("\n"), 'utf8');

}