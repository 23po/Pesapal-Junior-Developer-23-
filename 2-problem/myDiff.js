function myDiff (fileA, fileB) {
    
 const linesA = fileA.split("\n")

 const linesB = fileB.split("\n")

  // Compute the LCS of the two arrays
  const lcs = myLcs(linesA, linesB);

  // Compare each line in the LCS with the corresponding line in each file
  const diffLines = [];

  let a = 0;
  let b = 0
   

for (const line of lcs) {
 while (linesA[a] !== line) {
      diffLines.push(`- ${linesA[a]}`);
      a++;
    }
    while (linesB[b] !== line) {
      diffLines.push(`+ ${linesB[b]}`);
      b++;
    }
    diffLines.push(`  ${line}`);
    a++;
    b++;
  }


  while (a < linesA.length) {
    diffLines.push(`- ${linesA[a]}`);
    a++;
  }
  while (b < linesB.length) {
    diffLines.push(`+ ${linesB[b]}`);
    b++;
  }
  diffLines.join("\n")

    
}

//lcs implementation using recursion
// function myLcs(a, b) {
//   if (a.length === 0 || b.length === 0) {
//     return "";
//   } else if (a[0] === b[0]) {
//     return a[0] + lcs(a.slice(1), b.slice(1));
//   } else {
//     const lcs1 = lcs(a, b.slice(1));
//     const lcs2 = lcs(a.slice(1), b);
//     return lcs1.length > lcs2.length ? lcs1 : lcs2;
//   }
// }

function myLcs(a, b) {
    if (a.length === 0 || b.length === 0) {
      return [];
    } else if (a[0] === b[0]) {
      return [a[0], ...lcs(a.slice(1), b.slice(1))];
    } else {
      const lcs1 = myLcs(a, b.slice(1));
      const lcs2 = myLcs(a.slice(1), b);
      return lcs1.length > lcs2.length ? lcs1 : lcs2;
    }
  }
export default myDiff