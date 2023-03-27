import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { BookModule } from './book';
import { CustomerModule } from './customer';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    AuthModule,
    BookModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
