import { Injectable } from '@nestjs/common';
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
    return;
  }

  registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.return;
  }
}
