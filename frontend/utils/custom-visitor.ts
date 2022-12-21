import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TypeScriptParserVisitor } from '@theGrammar/typescript/TypeScriptParserVisitor'
import { AsExpressionContext, ClassDeclarationContext, ClassExpressionContext, FromBlockContext, FunctionBodyContext, FunctionDeclarationContext, FunctionExpressionContext, IdentifierExpressionContext, IdentifierNameContext, ImportStatementContext, NewExpressionContext, PropertyAssignmentContext, Type_Context, VariableDeclarationContext, VariableStatementContext } from '@theGrammar/typescript/TypeScriptParser'
import getText from './ast-listener/lib/get-text'


 
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

  visitClassDeclaration(ctx: ClassDeclarationContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    this.visitChildren(ctx)
    return '\n\n' + getText(ctx, this.rawInputData)
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    this.visitChildren(ctx)
    return '\n\n' + getText(ctx, this.rawInputData)
  }

  visitFunctionExpression(ctx: FunctionExpressionContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    return getText(ctx, this.rawInputData)
  }

  visitVariableStatement(ctx: VariableStatementContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    this.visitChildren(ctx)
    return '\n' + getText(ctx, this.rawInputData)
  }

  visitImportStatement(ctx: ImportStatementContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    return '\n' + getText(ctx, this.rawInputData)
  }

  visitIdentifierExpression(ctx: IdentifierExpressionContext) {
    //this.chunkData.push(getText(ctx, this.rawInputData))
    if (ctx.text === 'console') {
      return '\n' + getText(ctx, this.rawInputData)
    }
    return  getText(ctx, this.rawInputData)
  }

  visitIdentifierName(ctx: IdentifierNameContext) {
    return  getText(ctx, this.rawInputData)
  }

  /**
   * Traverse node.
   * 
   * @see {@link https://www.antlr.org/api/Java/org/antlr/v4/runtime/tree/AbstractParseTreeVisitor.html}
   * @param ctx 
   * @returns 
   */
  visitChildren(ctx: any) {
    let code = '';
    for (let i = 0; i < ctx?.childCount; i++) {
      code += this.visit(ctx?.children[i]);
    }
    return code;
  }

  /**
   * Traverse token.
   * 
   * @see {@link https://www.antlr.org/api/Java/org/antlr/v4/runtime/tree/AbstractParseTreeVisitor.html}
   * @param ctx 
   * @returns 
   */
  visitTerminal(ctx: any) {
    if (ctx.text === "<EOF>") {
      return ""
    }    
    return ctx.text
  }
  
}


export function getVisitorData(tree: any, rawData: any) {
  const visitor: any = new CustomVisitor(rawData)
  let theVisitor: any = visitor.visit(tree)
  return {
    code: theVisitor,
    chunkData: visitor.chunkData
  }
}
 