import { Injectable, NestMiddleware, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use(@Req() req:Request, res: any, next: () => void) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: 'Unauthorized',
            code: 401
        })
    }
    next();
  }
}