import getCAST from "../listeners/c-ast"

export class CAst {
  code: any

  constructor(code: any) {
    this.code = code
  }

  getAstData() {
    return getCAST(this.code)
  }
  
}