import { IsNumber, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class EditPostDto {
  @IsString()
  @ApiModelProperty({
    description: 'Post content',
    required: false,
    example: 'Lorem lorem lorem',
  })
  content: string;
}
