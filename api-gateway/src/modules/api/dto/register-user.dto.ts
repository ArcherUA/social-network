import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsString()
  @ApiModelProperty({
    description: 'Email of new user',
    required: true,
    example: 'ivanov@mail.com',
  })
  email: string;

  @IsString()
  @ApiModelProperty({
    description: 'Password for new user',
    required: true,
    example: 'qwerty123',
  })
  password: string;

  @IsString()
  @ApiModelProperty({
    description: 'Full name of new user',
    required: true,
    example: 'Petro Ivanov',
  })
  fullName: string;













}
