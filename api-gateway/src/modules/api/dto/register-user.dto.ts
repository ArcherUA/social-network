import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsString()
  @ApiModelProperty({
    description: 'Full name of new user',
    required: true,
    example: 'Petro Ivanov',
  })
  fullName: string;

  @IsString()
  @ApiModelProperty({
    description: 'Password for new user',
    required: true,
    example: 'qwerty123',
  })
  password: string;

  @IsString()
  @ApiModelProperty({
    description: 'Email of new user',
    required: true,
    example: 'ivanov@mail.com',
  })
  email: string;

  @IsString()
  @ApiModelProperty({
    description: 'Phone number of new user',
    required: true,
    example: '023509723509',
  })
  phoneNumber: string;

  @IsString()
  @ApiModelProperty({
    description: 'Date of birth new user',
    required: true,
    example: '20.02.1989',
  })
  dateOfBirth: string;

  @IsString()
  @ApiModelProperty({
    description: 'Adress of new user',
    required: true,
    example: 'Ukraine',
  })
  adres: string;

  @IsString()
  @ApiModelProperty({
    description: 'Avatar of new user',
    required: true,
    example: 'Url',
  })
  avatarId: string;
}
