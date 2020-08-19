import {IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class EditPostDto {

  @IsNumber()
  @ApiModelProperty({
    description: 'Id post',
    required: false,
    example: '124513',
  })
  id: number;

  @IsString()
  @ApiModelProperty({
    description: 'Post content',
    required: false,
    example: 'Lorem lorem lorem',
  })
  content: string;

}
