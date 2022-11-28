import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypeScriptLexer } from '@src/lib/my-grammar/TypeScriptLexer';
import { TypeScriptParser } from '@src/lib/my-grammar/TypeScriptParser';
import getAST from '@src/utils/ast-parser/get-ast';

@Injectable()
export class AstService {
  async get(req: Request) {
    let code = req.body.code ?? ''
    let inputStream: any = new ANTLRInputStream(code);
    let lexer: any = new TypeScriptLexer(inputStream);
    let tokenStream: any = new CommonTokenStream(lexer);
    let parser: any = new TypeScriptParser(tokenStream);
    parser.buildParseTree = true;
    let tree: any = parser.program()
    let ast: any = getAST(tree)
    return ast
  }
}