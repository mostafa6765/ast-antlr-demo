import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { TypeScriptParserListener } from '@theGrammer/TypeScriptParserListener';
import {
  VariableDeclarationContext,
  ClassDeclarationContext,
  FunctionDeclarationContext,
  StatementContext
} from '@theGrammer/TypeScriptParser';
import getText from './get-text';


var output: any = [];
let id = -1;

class EnterFunctionListener implements TypeScriptParserListener {

  /**
   * Class parser rule.
   * 
   * @param {mixed} context 
   */
  enterClassDeclaration(context: ClassDeclarationContext) {
    id = id + 1
    let data = {
      id: id,
      line: [context._start.line, context._stop?.line],
      text: getText(context),
      type: 'class'
    }
    output.push(data)
  }

  /**
   * Variable parser rule.
   * 
   * @param {mixed} context.
   */
  enterVariableDeclaration(context: VariableDeclarationContext) {
    id = id + 1
    let data = {
      id: id,
      line: [context._start.line, context._stop?.line],
      text: getText(context),
      type: 'variable'
    }
    output.push(data)
  }

  /**
   * Variable parser rule.
   * 
   * @param {mixed} context 
   */
  enterFunctionDeclaration(context: FunctionDeclarationContext) {
    id = id + 1
    let data: any = {
      id: id,
      line: [context._start.line, context._stop?.line],
      text: getText(context),
      type: 'function',
      
    }
    output.push(data)
  }

  public exitStatement = (ctx: StatementContext): void => {
    // Do your processing here.
    console.log(ctx)
};
}

/**
 * Generate AST object.
 * 
 * @param tree 
 * @returns {object}
 */
function getAST(tree: any): object {
  output = [];
  id = -1;
  const listener: any = new EnterFunctionListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return output;
}

export default getAST