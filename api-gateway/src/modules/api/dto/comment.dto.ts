import {IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class CommentDto {
  @IsString()
  @ApiModelProperty({
    description: 'Comment content',
    required: true,
    example: 'Very wonderful day',
  })
  content: string;

  @IsNumber()
  @ApiModelProperty({
    description: 'Post ID',
    required: true,
    example: 20,
  })
  post: number;

  @IsNumber()
  @ApiModelProperty({
    description: 'User ID',
    required: true,
    example: 20,
  })
  userId: number;
}
