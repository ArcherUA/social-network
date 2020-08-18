import {IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class EditCommentDto {
  @IsString()
  @ApiModelProperty({
    description: 'Comment content',
    required: false,
    example: 'Very wonderful day',
  })
  content: string;

}
