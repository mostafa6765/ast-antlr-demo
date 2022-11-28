import { Module } from '@nestjs/common';
import { AstController } from './ast.controller';
import { AstService } from './ast.service';

@Module({
  controllers: [AstController],
  imports: [],
  providers: [AstService],
  exports: []
})
export class AstModule {}