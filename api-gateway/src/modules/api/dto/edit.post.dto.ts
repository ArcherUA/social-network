import {IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class EditPostDto {

  @IsString()
  @ApiModelProperty({
    description: 'Post content',
    required: false,
    example: 'Lorem lorem lorem',
  })
  content: string;

  @IsNumber()
  @ApiModelProperty({
    description: 'Like list',
    required: false,
  })
  likeList: number;

  @IsNumber()
  @ApiModelProperty({
    description: 'Comment list',
    required: false,
  })
  commentList: number;

  @IsString()
  @ApiModelProperty({
    description: 'Post author',
    required: false,
  })
  author: string;
}
