import assembler from "./assembler";

function simulator(program) {

   const lines = program.split("\n");    

    
   let pc = 0;
   let cond = false;
   //let executable; 
   
   while(!cond) {
      if (!isCommentLine(lines[pc])) {
         return assembler(lines[pc])
         }
      if (lines(pc) == lines[-1]) {
         cond = true      
      }   
      pc++
   }

}

export default simulator



   // function isCommentLine(line) {
   //    return line.trim().startsWith(";");
   // }

   // for (let currentLine = 0; currentLine < lines.length; currentLine++)  {
   
   //    if (!isCommentLine(currentLine)) {
   //    executable = assembler(currentLine)
   //    }
   // }



//return executable   
//    let register = []
 
//  //how to extract opcode and operands from the executable? bitwise 
//  // i possible solutions were string manipulation, bitwise operators, and
 
//  let opcode = (executable && 0xFF) >> 12

//  let operands = [(executable && 0xFF >> 8), (executable && 0xFF >> 4), executable && 0xFF]
 
//  let pc_counter =  opcode

