import getAST from "../listeners/cpp-ast"

export class CPPAst {
  code: any

  constructor(code: any) {
    this.code = code
  }

  getAstData() {
    return getAST(this.code)
  }
  
}