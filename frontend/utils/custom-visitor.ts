import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TypeScriptParserVisitor } from '@theGrammar/typescript/TypeScriptParserVisitor'
import { AsExpressionContext, ClassDeclarationContext, ClassExpressionContext, FromBlockContext, FunctionBodyContext, FunctionDeclarationContext, FunctionExpressionContext, IdentifierExpressionContext, IdentifierNameContext, ImportStatementContext, PropertyAssignmentContext, Type_Context, VariableDeclarationContext, VariableStatementContext } from '@theGrammar/typescript/TypeScriptParser'




class CustomVisitor extends AbstractParseTreeVisitor<any> implements TypeScriptParserVisitor<any> {
  rawInputData: any
  chunkData: any = []

  constructor(rawData: any) {
    super()
    this.rawInputData = rawData
    this.chunkData = []
  }

  generateText(ctx: any, input: any){
    let start: number = ctx._start?.startIndex;
    let stop: any = ctx._stop?.stopIndex;
    return input?.data?.slice(start, stop + 1)
  }

  defaultResult() {
    return " "
  }

  visitClassDeclaration(ctx: ClassDeclarationContext) {
    this.chunkData.push(this.generateText(ctx, this.rawInputData))
    console.log(ctx)
    this.visitChildren(ctx)
    return '\n\n' + this.generateText(ctx, this.rawInputData)
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.chunkData.push(this.generateText(ctx, this.rawInputData))
    this.visitChildren(ctx)
    return '\n\n' + this.generateText(ctx, this.rawInputData)
  }

  visitFunctionExpression(ctx: FunctionExpressionContext) {
    this.chunkData.push(this.generateText(ctx, this.rawInputData))
    return this.generateText(ctx, this.rawInputData)
  }

  visitVariableStatement(ctx: VariableStatementContext) {
    this.chunkData.push(this.generateText(ctx, this.rawInputData))
    return '\n' + this.generateText(ctx, this.rawInputData)
  }

  visitImportStatement(ctx: ImportStatementContext) {
    this.chunkData.push(this.generateText(ctx, this.rawInputData))
    return '\n' + this.generateText(ctx, this.rawInputData)
  }

  visitIdentifierExpression(ctx: IdentifierExpressionContext) {
    //this.chunkData.push(this.generateText(ctx, this.rawInputData))
    return  this.generateText(ctx, this.rawInputData)
  }

  visitIdentifierName(ctx: IdentifierNameContext) {
    return  this.generateText(ctx, this.rawInputData)
  }

  // visit children
  visitChildren(ctx: any) {
    let code = '';
    for (let i = 0; i < ctx?.childCount; i++) {
      code += this.visit(ctx?.children[i]);
    }
    return code;
  }

  // visit terminal
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
 