


const instructionSet = {

"halt": 0x00, // -- Terminate program

"nop" : 0x01,  //-- Do nothing

"li" : 0x02,   //-- Load Immediate: li R1 0x00000000
               // Load 0x00000000 into R1

"lw" : 0x03,   //-- Load Word: lw R1 R2
               //Load the contents of the memory location
               //pointed to by R2 into R1

"lw" : 0x04,   //sw   -- Store Word: sw R1 R2
               //Store the contents of R2 in the memory
               //location pointed to by R1

"add" : 0x05,  //add  -- Add: add R3 R1 R2
               //Add R1 to R2 and store the result in R3

"sub" : 0x06,  //sub  -- Subtract: sub R3 R1 R2
               //Subtract R2 from R1 and store the result in R3

"mult" : 0x07, //mult -- Multiply: mult R3 R1 R2
               //Multiply R1 by R2 and store the result in R3

"div" : 0x08,  //div  -- Divide: div R3 R1 R2
               //Divide R1 by R2 and store the result in R3

"j" : 0x09,    //-- Unconditional Jump: j 0x00000000
               //Jump to memory location 0x00000000

"jr" : 0x0A,   //-- Unconditional Jump (operands[0]): jr R1
               //Jump to memory location stored in R1

"beq" : 0x0B,  //beq  -- Branch if Equal: bne R1 R2 R3
               //Branch to memory location stored in R3
               //if R1 and R2 are equal

"bne" : 0x0C,  //bne  -- Branch if Not Equal: beq R1 R2 R3
               //Branch to memory location stored in R3
               //if R1 and R2 are not equal

"inc" : 0x0D,  //inc  -- Increment operands[0]: inc R1
               //Increment R1

"dec" : 0x0E   //dec  -- Decrement operands[0]: dec R1
               //Decrement R1

  };


function assembler (instruction) {

    let components = instruction.split(" ");
    
    //mnemonic, operands
    let [mnemonic] = instruction.split(' ')[0]

     let [operands] = instruction.split(" ").slice(1).map((operand) => {
       return parseInt(operand, 16)
     })   

    //vars for holding translations
    let opcode
    let executable
    
    
    if (mnemonic == "halt") {
    
    opcode = 0x00
    executable = (opcode << 12) | (operands[0] << 8) | operands[1]
    }
    if (mnemonic == "nop") {
    opcode = 0x01 
    executable = (opcode << 12) | (operands[0] << 8) | operands[1]
    
    }
    
    
    if (mnemonic == "li") { 
    opcode = 0x02
    executable = (opcode << 12) | (operands[0] << 8) | operands[1] 
    
    }
    
    if (mnemonic == "lw") {
        opcode = 0x03;
        executable = (opcode << 12) | (operands[0] << 8) | operands[1];
    
    }
    if (mnemonic == "sw") {
        opcode = 0x04;
         executable = (opcode << 12) | (operands[0] << 8) | operands2;
    
    }
    
    if (mnemonic == "add") {
        opcode = 0x05;
        executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    
    }
    if (mnemonic == "sub") {
        opcode = 0x06;
        executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    
    }
    
    if (mnemonic == "mult") {
        opcode = 0x07;
        executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    
    }
    if (mnemonic == "div") {
        opcode = 0x08;
        executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    }
    
    if (mnemonic == "j") {
        opcode = 0x09;
        executable = (opcode << 12) | operands[0];
    }
    if (mnemonic == "jr") {
        opcode = 0x0A;
        executable = (opcode << 12) | operands[0];
    }
    
    if (mnemonic == "beq") {
       opcode = 0x0B;
       executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    }
    if (mnemonic == "bne") {
       opcode = 0x0C
       executable = (opcode << 12) | (operands[0] << 8) | (operands[1] << 4) | operands[2];
    }
    
    if (mnemonic == "inc") {
      opcode = 0x0D
      executable = (opcode << 12) | operands[0];
    }
    if (mnemonic == "dec") {
      opcode = 0x0E
      executable = (opcode << 12) | operands[0];
    
    }
    
    return executable;
    
    
    }