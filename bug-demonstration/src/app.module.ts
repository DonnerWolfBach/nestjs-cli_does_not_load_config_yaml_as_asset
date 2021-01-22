import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration]
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
