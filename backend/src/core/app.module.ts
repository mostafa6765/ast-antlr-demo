import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// module
import { AstModule } from '@src/modules/ast/ast.module';

// middleware
import { AuthorizationMiddleware } from '@src/app/middleware/authorization.middleware';

@Module({
  imports: [
    AstModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // middleware assign
    consumer.apply(AuthorizationMiddleware).forRoutes('*');
  }
}
