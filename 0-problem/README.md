# Problem 0: A computer.

1. Write an assembler for the instruction set that takes a text assembly program written for the above instruction set and produces the program as a set of 16-bit numbers. Basically, the task is to encode the text of the assembly into the bytecode format.

2. Write a simulator for the machine that will take the output of the assembler and execute it, correctly.


## Assembler

- This function takes an instruction (a single line)

- It breaks down the instruction into its mnemonic and operands, converted to hexadecimal

- assigns an opcode to the mnemonic; based on the given instruction set.

- the opcode will be joined to the opcodes to produce bytecode

- opcode is always shifted by 12 bits to take up the first 4-bit segment in the result. The next 4 bit segments are taken up by the operands in order 


## isCommentLine

- returns true if a line is a comment


## Simulator

1. This takes a program and breaks it to an array of lines

2. Initializes program counter (pc) to 0 and condition (cond) to false

3. While the condition remains false, each line in the array that is not a comment line is passed as an argument to the assembler function, the result of which is returned.

4. pc increases by 1 on every iteration

5. If the current line is the last line in the array, the loop sets condition to true, to exit the loop.



