import { Controller, Get, Req, Res, Query } from '@nestjs/common';
import { Request, Response} from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response,@Req() req:Request): any {
    let a: any = this.appService.getHello();
    res.json(a)
  }
}
