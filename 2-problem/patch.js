import fs from 'fs';
import myDiff from "./diff";

function myPatch (fileA, fileB) {

    const a = fs.readFileSync(fileA, 'utf8');
    const b = fs.readFileSync(fileB, 'utf8');

  const diffLines = myDiff(a, b).split("\n");


  const segment = []
  const patch = []

 for (const line of diffLines) {
    if (line.startsWith('- ')) {
        segment.push({ type: 'remove', line: line.slice(2) });
      } else if (line.startsWith('+ ')) {
        segment.push({ type: 'add', line: line.slice(2) });
      }
 }

}