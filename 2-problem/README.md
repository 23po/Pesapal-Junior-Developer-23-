# Problem 2: A diff and a patch.

The Unix tools diff and patch work in such a way that one can run a diff between file A and file B, and then use patch with the output of the diff and file A to produce file B.

Write a pair of programs, a diff and and a patch, which allow one to do this same operation, to compare two files and use the output and one of the files to produce the other file. Write them to work on the shell similarly to the POSIX manual descriptions (linked above), but you have freedom in terms of the algorithms used and the nature of the actual diff output. 

When your diff application is run on two files, it should be possible to use either file together with the diff output to produce the other. (Don't write a silly concatenating diff which simply concatenates the two files. We should be able to see that the diff output is actually the differences between the files.)

# Solution

From my research, 3 kinds of algorithms can be used to do a comparison of character sequences between mutliples files.

- Patience Stack
- Hunt-McIlroy algorithm:
- Longest Common Subsequence
- Myers' diff algorithm (variation of LCM)
- Hunt-McIlroy algorithm (variation of LCM)

I tried to implement LCM, which was the clearest to me and is applied in the git versioning system, for example. 

## myDiff --> using Longest Common Subsequence (LCS) Method

1. myDiff breaks takes two input files and breaks each into an array of lines (linesA, linesB)

2. Each line in the lcs will be compared to each corresponding line in the two arrays

3. - Each differing line between linesA and LCS is pushed to a difArray with a "- " prefix.
   - Each differing line in linesB and is pushed to the same diffArray, but with a "+ " prefix.
   - similar lines are also pushed to diffArray but prefixed with an empty space.("  ")

4. linesA and linesB are longer or equal to the LCS. So in cases, there will be extra lines not compared with the LCS. These lines are also pushed to the diffArray with either "- " or "+ " prefixes.   

5. the diffArray is joined and returned as a single string. This output represents the diference between the 2 files.

## myPatch

1. myPatch takes in two filepaths, which are read as utf-8 format strings and stored in 2 variables.
   - one drawback is the current implementation is synchronous

2. these strings are passed to the myDiff function and the result is converted to an array of lines. This is called diffLines. 

3. A changes array is initialized. 

4. the function iterates through diffLines and pushes data to the changes array. 

   - if the line stats with "- ", it is considered a deletion and an object containing the  type "delete" and the line to be deleted is added to the changes array.
   - If a line starts with "+ " , it is considered an insertion and an object containing the type insert and the line to be inserted is added to the changes array.

5. an array contentsB that contains all the lines of the file A is initialized.

6. we loop through all the objects in the changs array -:

   -  If the change is of type delete, it removes the line at the given index from the contentsB array using the splice method.
   - If the change is of type insert, it inserts the new line (change.line) at the given index (change.index - 1) in the contentsB array using the splice method.

7. Resulting contents are written to file b



## myLCS

I read and researched several implementations of lcs and found recursion to be the simplest to understand at this time.

1. the function takes two arrays, if any of the two is empty, lcs is an empty array.

2. if the first lines in either arrays are equal, this line is added into the lcs array. with one spot in the array filled, the rest are to be filled by a recursive call of the rest of the arrays. 

3. if the first lines are not equal, the function computes the LCS of linesA and the remaining lines of linesB, and the LCS of b and the remaining lines of a. the longer of the 2 lcs is returned