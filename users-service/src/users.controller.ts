import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { Request, Response } from 'express';


@Controller('users')
@ApiUseTags('users')
export class UsersController {


}