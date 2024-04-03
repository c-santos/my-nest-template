import { Module } from '@nestjs/common';
import { AppController } from '../http/controllers/app.controller';
import { AppService } from '../../application/services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../config/typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => dbConfig,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
