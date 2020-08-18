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

  @IsNumber()
  @ApiModelProperty({
    description: 'Like list',
    required: true,
  })
  likeList: number;

  @IsNumber()
  @ApiModelProperty({
    description: 'Comment list',
    required: true,
  })
  commentList: number;

  @IsString()
  @ApiModelProperty({
    description: 'Post author',
    required: true,
  })
  author: string;
}
