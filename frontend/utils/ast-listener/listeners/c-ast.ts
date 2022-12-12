import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import {
  ANTLRInputStream,
  CommonTokenStream,
  ParserRuleContext
} from 'antlr4ts';
import { CLexer } from '@theGrammar/c/CLexer';
import { ConditionalExpressionContext, ConstantExpressionContext, CParser, ForDeclarationContext, FunctionDefinitionContext } from '@theGrammar/c/CParser';
import { CListener } from '@theGrammar/c/CListener';
import getData from '../lib/get-data';
var output: any = [];
let id = -1;
let parser: any

class EnterFunctionListener implements CListener {
  // enterEveryRule(context: ParserRuleContext) {
  //   //
  // }

  enterFunctionDefinition(ctx: FunctionDefinitionContext) {
    id = id + 1
    let data: any = getData(id, ctx, parser, -10)
    output.push(data)
  }
}



/**
 * Generate AST object.
 * 
 * @param tree 
 * @returns {object}
 */
function getTypescriptAST(code: any): object {
  output = [];
  id = -1;

  let inputStream: any = new ANTLRInputStream(code);
  let lexer: any = new CLexer(inputStream);
  let tokenStream: any = new CommonTokenStream(lexer);
  parser = new CParser(tokenStream);
  parser.buildParseTree = true;
  let tree: any = parser.compilationUnit();
  
  const listener: any = new EnterFunctionListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return output;
}

export default getTypescriptAST