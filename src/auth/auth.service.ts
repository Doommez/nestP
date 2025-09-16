import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private JwtService: JwtService,
  ) {}

  login(userDto: CreateUserDto) {
    return userDto;
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким мылом уже есть, соре',
        HttpStatus.BAD_REQUEST,
      );
    }
    // const hashPass = await bcrytjs.hash();
    return userDto;
  }
}
