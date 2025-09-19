import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AuthGuard } from '../auth/jwt-auth.guard';
import { AddRoleDTO } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

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
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
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

  @ApiOperation({ summary: 'Выдать роль ' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('add/role')
  async addRole(@Body() addRole: AddRoleDTO) {
    return await this.userService.addRole(addRole);
  }

  @ApiOperation({ summary: 'Забанить пользотвателя ' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('ban')
  async ban(@Body() value: BanUserDto) {
    return await this.userService.ban(value);
  }
}
