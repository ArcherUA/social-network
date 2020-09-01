import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsString()
  @ApiModelProperty({
    description: 'Email of user',
    required: true,
    example: 'ivanov@gmail.com',
  })
  email: string;

  @IsString()
  @ApiModelProperty({
    description: 'Password of user',
    required: true,
    example: 'qwerty123',
  })
  password: string;
}
