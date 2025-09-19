import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.model';
import { RolesService } from '../roles/role.service';
import { AddRoleDTO } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email,
      },
      include: {
        all: true,
      },
    });
  }

  async addRole(dto: AddRoleDTO) {
    const user = await this.userRepository.findByPk(dto.userid);
    const role = await this.rolesService.getRoleByValue(dto.value);
    if (role && user) {
    }
  }

  async ban(value: BanUserDto) {
    return Promise.resolve(undefined);
  }
}
