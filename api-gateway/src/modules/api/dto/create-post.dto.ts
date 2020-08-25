import {IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class CreatePostDto {

  @IsString()
  @ApiModelProperty({
    description: 'Post content',
    required: true,
    example: 'Lorem lorem lorem',
  })
  content: string;


  @IsString()
  @ApiModelProperty({
    description: 'Post author',
    required: true,
  })
  author: string;
}
