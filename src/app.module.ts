import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { BookModule } from './book';
import { CustomerModule } from './customer';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    AuthModule,
    BookModule,
    CustomerModule,
    RentalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
