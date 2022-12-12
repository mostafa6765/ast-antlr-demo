import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import {
  ANTLRInputStream,
  CommonTokenStream,
  ParserRuleContext
} from 'antlr4ts';
import { CPPLexer } from '@theGrammar/cpp/CPPLexer';
import { ClassNameContext, CPPParser, FunctionDefinitionContext, NamespaceNameContext } from '@theGrammar/cpp/CPPParser';
import { CPPParserListener } from '@theGrammar/cpp/CPPParserListener';
import getData from '../lib/get-data';

var output: any = [];
let id = -1;
let parser: any

class EnterFunctionListener implements CPPParserListener {
  enterEveryRule(ctx: ParserRuleContext) {
    console.log(ctx)
  }
  enterClassName(ctx: ClassNameContext) {
    id = id + 1
    let data: any = getData(id, ctx, parser, -4)
    output.push(data)
  };

  enterFunctionDefinition(ctx: FunctionDefinitionContext) {
    id = id + 1
    let data: any = getData(id, ctx, parser, -10)
    output.push(data)
  }

  enterNamespaceName(ctx: NamespaceNameContext){
    id = id + 1
    let data: any = getData(id, ctx, parser, -4)
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
  let lexer: any = new CPPLexer(inputStream);
  let tokenStream: any = new CommonTokenStream(lexer);
  parser = new CPPParser(tokenStream);
  parser.buildParseTree = true;
  let tree: any = parser.translationUnit();
  
  const listener: any = new EnterFunctionListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return output;
}

export default getAST