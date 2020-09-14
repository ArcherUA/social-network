import { IsNumber, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class MessageDto {
  @IsString()
  @ApiModelProperty({
    description: 'Content of message',
    required: true,
    example: 'Lorem lorem lorem',
  })
  content: string;

  @IsNumber()
  @ApiModelProperty({
    description: 'Author id',
    required: true,
    example: '21312',
  })
  authorId: number;

  @IsNumber()
  @ApiModelProperty({
    description: 'Id of the recipient',
    required: true,
    example: '213',
  })
  recipientId: number;
}
