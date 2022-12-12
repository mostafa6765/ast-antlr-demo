import getTypescriptAST from "../listeners/typescript-ast"

export class TypescriptAst {
  code: any

  constructor(code: any) {
    this.code = code
  }

  getAstData() {
    return getTypescriptAST(this.code)
  }
  
}