import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TypeScriptParserVisitor } from '@theGrammar/typescript/TypeScriptParserVisitor'
import { AsExpressionContext, ClassDeclarationContext, ClassExpressionContext, FromBlockContext, FunctionBodyContext, FunctionDeclarationContext, FunctionExpressionContext, FunctionTypoDeclarationContext, IdentifierExpressionContext, IdentifierNameContext, ImportStatementContext, ClassTypoDeclarationContext, NewExpressionContext, PropertyAssignmentContext, Type_Context, VariableDeclarationContext, VariableStatementContext, ClassTailContext, ConstructorDeclarationContext } from '@theGrammar/typescript/TypeScriptParser'
import getText from './ast-listener/lib/get-text'

export default class GenerateVistor extends AbstractParseTreeVisitor<any> implements TypeScriptParserVisitor<any> {
  rawInputData: any
  chunkData: any = []
  usedFuncClass: any

  constructor(rawData: any) {
    super()
    this.rawInputData = rawData
    this.chunkData = []
    this.usedFuncClass = []
  }

  defaultResult() {
    return " "
  }

  visitClassDeclaration(ctx: ClassDeclarationContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    this.visitChildren(ctx)
    return '\n\n' + getText(ctx, this.rawInputData)
  }

  visitclassTypoDeclaration(ctx: ClassTypoDeclarationContext) {
    return '\n\n' + getText(ctx.children[3], this.rawInputData)
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    let b:any = []
    
    if (ctx.childCount) {
      for (let i = 0; i < ctx.childCount; i++) {
        if (ctx.children[i].constructor.name === 'FunctionBodyContext') {
          let functionBodyctx: any = ctx.children[i]

          functionBodyctx.children[0].children.forEach((item: any) => {
            item.children[0].children.forEach((item2: any) => {
              if (item2.constructor.name === 'VariableStatementContext') {
                item2.children.forEach((item3: any) => {
                  
                  if (item3.constructor.name === 'VariableDeclarationListContext') {
                    item3.children[0].children.forEach((item4: any) => {
                      let data: any = {}
                      if (item4.constructor.name === 'NewExpressionContext') {
                        data['type'] = "class"
                        data['name'] = item4.children[1].text
                        data['variable'] = item3.children[0].children[0].text
                        data['used'] = []
                        this.usedFuncClass.push(data)
                        //console.log(item3.children[0].children[0].text)
                      } else if(item4.constructor.name === 'IdentifierExpressionContext') {
                        data['type'] = "function"
                        data['name'] = item4.children[0].text
                        this.usedFuncClass.push(data)
                      } else {
                        
                      }
                    })
                  }
                })
              
              }

              this.usedFuncClass.forEach((assignFunc: any) => {
                if (assignFunc.type === 'class') {
                  let regex = new RegExp(`${assignFunc.variable}` + ".+\\(+\\)")
                  if (item2.text.match(regex)) {
                    let generate = ((item2.text.match(regex))[0]).split(".")
                    assignFunc["used"].push(generate[1].slice(0,-2))
                  }
                }
              })              
              // console.log(item2)
            })
          });
        }
      }
    }
    this.visitChildren(ctx)
    return '\n\n' + getText(ctx, this.rawInputData)
  }

  visitFunctionTypoDeclaration(ctx: FunctionTypoDeclarationContext) {
    // fix function keyword 
    //return '\n\nfunction ' + ctx.children[1].text + getText(ctx.children[2], this.rawInputData) + '{\n' + '\t' + getText(ctx.children[4], this.rawInputData) + '\n}'

    return '\n\n' + '{\n' + '\t' + getText(ctx.children[4], this.rawInputData) + '\n}'
  }

  visitFunctionExpression(ctx: FunctionExpressionContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    return getText(ctx, this.rawInputData)
  }

  visitVariableStatement(ctx: VariableStatementContext) {
    this.chunkData.push(getText(ctx, this.rawInputData))
    // console.log(ctx)
    // console.log(ctx.text)
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