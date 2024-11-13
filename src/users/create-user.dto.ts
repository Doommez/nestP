import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@mail.com',
    type: 'string',
    description: 'почтовый адрес',
  })
  readonly email: string;
  @ApiProperty({ example: '*******', type: 'string', description: 'пароль' })
  readonly password: string;
}
