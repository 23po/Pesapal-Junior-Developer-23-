# Problem 2: A diff and a patch.

The Unix tools diff and patch work in such a way that one can run a diff between file A and file B, and then use patch with the output of the diff and file A to produce file B.

Write a pair of programs, a diff and and a patch, which allow one to do this same operation, to compare two files and use the output and one of the files to produce the other file. Write them to work on the shell similarly to the POSIX manual descriptions (linked above), but you have freedom in terms of the algorithms used and the nature of the actual diff output. 

When your diff application is run on two files, it should be possible to use either file together with the diff output to produce the other. (Don't write a silly concatenating diff which simply concatenates the two files. We should be able to see that the diff output is actually the differences between the files.)

# Solution

From my research, several algorithms can be used to do a diff between sequences of characters.

I tried to implement LCM, which was the clearest to me. 

## myDiff --> using Longest Common Substring (LCS) Method

1. myDiff breaks takes two input files and breaks each into an array of lines

2. Each line in the lcs will be compared to each corresponding line in the two arrays

3. - Each differing line between linesA and LCS is pushed to a difArray with a "-" prefix.
   - Each differing line in linesB and its correspondent in LCA is pushed to the same   difArray from above, but with a "+" prefix.
   - similar lines are also pushed to diffArray but prefixed with an empty space.

4. Remaining lines that can't be compared to LCS since the arrays are longer than LCS are also pushed to the diffArray with either "-" or "+" prefixes.   

5. the diffArray is joined and returned as a single string.

## myPatch

1. 


## myLCS

I read and researched several implementations of lcs and found recursion to be the simplest to understand at this time.

1. the function takes two arrays, if any of the two is empty, lcs is an empty array.

2. if the first lines in either arrays are equal, this line is added into the lcs array. with one spot in the array filled, the rest are to be filled by a recursive call of the rest of the arrays. 

3. if the first lines are not equal, the function computes the LCS of linesA and the remaining lines of linesB, and the LCS of b and the remaining lines of a. the longer of the 2 lcs is returned