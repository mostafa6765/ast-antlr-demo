import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TypeScriptParserVisitor } from '@theGrammar/typescript/TypeScriptParserVisitor'
import { AsExpressionContext, ClassDeclarationContext, ClassExpressionContext, FromBlockContext, FunctionBodyContext, FunctionDeclarationContext, FunctionExpressionContext, IdentifierExpressionContext, IdentifierNameContext, ImportStatementContext, NewExpressionContext, PropertyAssignmentContext, Type_Context, VariableDeclarationContext, VariableStatementContext } from '@theGrammar/typescript/TypeScriptParser'
import getText from './ast-listener/lib/get-text'
import { ParseTree } from 'antlr4ts/tree/ParseTree'


 
class CustomVisitor extends AbstractParseTreeVisitor<any> implements TypeScriptParserVisitor<any> {
  rawInputData: any
  chunkData: any = []

  constructor(rawData: any) {
    super()
    this.rawInputData = rawData
    this.chunkData = []
  }

  defaultResult() {
    return " "
  }

  visit(tree: any) {
    const contextObject: any = {};
    contextObject.text = tree.text;
    contextObject.startLine = tree.start?.line;
    contextObject.endLine = tree.stop?.line;
    contextObject.type = tree.constructor.name;
    for (let i = 0; i < tree.childCount; i++) {
      contextObject[i] = this.visit(tree.getChild(i));
    };
    return contextObject
  }

}


export function getVisitorAstData(tree: any, rawData: any) {
  const visitor: any = new CustomVisitor(rawData)

  let theVisitor: any = ""
  theVisitor = visitor.visit(tree)
  console.log(theVisitor)
  return theVisitor
}
 