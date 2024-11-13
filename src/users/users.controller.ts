import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('create/user')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
