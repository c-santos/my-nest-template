import { Inject } from '@nestjs/common';
import { BaseService } from './base.service';
import { CreateUserDto } from '@/infrastructure/http/dtos/create-user.dto';
import { IUserRepository } from '@/domain/interfaces/IUserRepository';

export class UserService extends BaseService {
    constructor(
        @Inject(IUserRepository) private userRepository: IUserRepository,
    ) {
        super(UserService.name);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async getOneUser(id: string) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async createUser(data: CreateUserDto) {
        return await this.userRepository.create(data);
    }
}
