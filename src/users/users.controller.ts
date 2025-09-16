import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  @Get('all')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получение пользователя по его мылу ' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('mail/')
  async getUserByEmail(@Query('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }
}
