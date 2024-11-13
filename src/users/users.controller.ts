import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiOperation({ summary: 'Создание пользователя ' })
  @ApiResponse({ status: 200, type: User })
  @Post('create/user')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }

  @ApiOperation({ summary: 'Получение всех пользователей ' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
