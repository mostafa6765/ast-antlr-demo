import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response} from 'express';
import { AstService } from './ast.service';

@Controller('/ast')
export class AstController {

  constructor(private readonly astService: AstService) {}

  @Post('get-tree')
  async getTree(@Res() res: Response, @Req() req: Request) {
    let tree = await this.astService.get(req)
    res.json(tree);
  }
}