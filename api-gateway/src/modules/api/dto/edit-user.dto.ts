import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class EditUserDto {
  @IsString()
  @ApiModelProperty({
    description: 'Full name of new user',
    required: false,
    example: 'Petro Ivanov',
  })
  fullName: string;

  @IsString()
  @ApiModelProperty({
    description: 'Password for new user',
    required: false,
    example: 'qwerty123',
  })
  password: string;

  @IsString()
  @ApiModelProperty({
    description: 'Email of new user',
    required: false,
    example: 'ivanov@mail.com',
  })
  email: string;

  @IsString()
  @ApiModelProperty({
    description: 'Phone number of new user',
    required: false,
    example: '023509723509',
  })
  phoneNumber: string;

  @IsString()
  @ApiModelProperty({
    description: 'Date of birth new user',
    required: false,
    example: '20.02.1989',
  })
  dateOfBirth: string;

  @IsString()
  @ApiModelProperty({
    description: 'Adress of new user',
    required: false,
    example: 'Ukraine',
  })
  adres: string;

  @IsString()
  @ApiModelProperty({
    description: 'Avatar of new user',
    required: false,
    example: 'Url',
  })
  avatarId: string;
}
