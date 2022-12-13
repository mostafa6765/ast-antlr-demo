import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypeScriptParser } from '@theGrammar/typescript/TypeScriptParser';
import { TypeScriptLexer } from '@theGrammar/typescript/TypeScriptLexer';
import { TypeScriptParserListener } from '@theGrammar/typescript/TypeScriptParserListener';
import {
  VariableDeclarationContext,
  ClassDeclarationContext,
  FunctionDeclarationContext,
} from '@theGrammar/typescript/TypeScriptParser';
import getData from '../lib/get-data';

var output: any = [];
let id = -1;
let parser: any 

class EnterFunctionListener implements TypeScriptParserListener {

  /**
   * Class parser rule.
   * 
   * @param {mixed} ctx 
   */
  enterClassDeclaration(ctx: ClassDeclarationContext) {
    id = id + 1
    let data = getData(id, ctx, parser, -11)
    output.push(data)
  }

  /**
   * Variable parser rule.
   * 
   * @param {mixed} ctx.
   */
  enterVariableDeclaration(ctx: VariableDeclarationContext) {
    id = id + 1
    let data:any = getData(id, ctx, parser, -11)
    output.push(data)
  }

  /**
   * Variable parser rule.
   * 
   * @param {mixed} ctx 
   */
  enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
    id = id + 1
    let data:any = getData(id, ctx, parser, -11)
    output.push(data)
  }
}



/**
 * Generate AST object.
 * 
 * @param tree 
 * @returns {object}
 */
function getAST(code: any): object {
  output = [];
  id = -1;

  let inputStream: any = new ANTLRInputStream(code);
  let lexer: any = new TypeScriptLexer(inputStream);
  let tokenStream: any = new CommonTokenStream(lexer);
  parser = new TypeScriptParser(tokenStream);
  parser.buildParseTree = true;
  let tree: any = parser.program();
  
  const listener: any = new EnterFunctionListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return output;
}

export default getAST