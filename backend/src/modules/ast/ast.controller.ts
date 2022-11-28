import { Controller, Get, Req, Res, Query } from '@nestjs/common';
import { Request, Response} from 'express';
import { AstService } from './ast.service';

@Controller('/ast')
export class AstController {

  constructor(private readonly astService: AstService) {}

  @Get('get-tree')
  async getTree(@Res() res: Response, @Req() req: Request) {
    let a = await this.astService.get()
    res.json({
      a: a
    });
  }
}