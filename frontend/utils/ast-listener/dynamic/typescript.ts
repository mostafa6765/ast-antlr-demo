import getAST from "../listeners/typescript-ast"

export class TypescriptAst {
  code: any

  constructor(code: any) {
    this.code = code
  }

  getAstData() {
    return getAST(this.code)
  }
  
}