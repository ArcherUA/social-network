import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CommentDto {
  @IsString()
  @ApiModelProperty({
    description: 'Comment content',
    required: true,
    example: 'Very wonderful day',
  })
  content: string;

}
