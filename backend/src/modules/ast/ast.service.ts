import { Injectable } from '@nestjs/common';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypeScriptLexer } from '@src/lib/my-grammar/TypeScriptLexer';
import { TypeScriptParser } from '@src/lib/my-grammar/TypeScriptParser';
import getAST from '@src/utils/ast-parser/get-ast';

@Injectable()
export class AstService {
  async get() {
    let code = `
    import Reverse from "./Reverse.js";
    
    let SingleDigit = [1,2,3,4,5,8,9]
    let DoubleDigit = [34,56,23]
    
    class AddSub {
      constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
      }
      
      addition() {
        return this.num1 + this.num2;
      }
      
      Substraction() {
        return this.num1 + this.num2;
      }
    }
    
    function TDMatrix(num1,num2){
      let arr = []
      for(let i = 0; i < num1; i++){
        let SubArr = []
        for(let j = 0; j < num2; j++){
          SubArr.push(j)
        }
        arr.push(SubArr)
      }
    }
    
    class MultDiv {
      constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
      }
      
      Multiplication() {
        return this.num1 * this.num2;
      }
      
      Division() {
        return this.num1/this.num2;
      }
    }
    
    const MultipliedNum = new MultDiv(34,67)
    console.log(MultipliedNum.Multiplication())
    
    function CallReverse(){
      let val = Reverse(SingleDigit)
      let addVal = new AddSub(34,55)
      val.push(addVal.addition())
      return val;
    }
    
    const RevAs = CallReverse()
    console.log(RevAs)
        `
    let inputStream: any = new ANTLRInputStream(code);
    let lexer: any = new TypeScriptLexer(inputStream);
    let tokenStream: any = new CommonTokenStream(lexer);
    let parser: any = new TypeScriptParser(tokenStream);
    parser.buildParseTree = true;
    let tree: any = parser.program()
    let ast: any = getAST(tree)
    return ast
  }
}