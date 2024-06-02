import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model';
import { UserEntity } from '@/domain/entities/user.entity';

export class User extends BaseModel implements UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;
}
