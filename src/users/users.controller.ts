import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDTO } from './dtos/returnUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body(ValidationPipe) createUserDTO: CreateUserDto,
  ): Promise<ReturnUserDTO> {
    const user = await this.userService.createAdminUser(createUserDTO);
    return {
      user,
      message: 'Usuário Administrador cadastrado com sucesso! :)',
    };
  }
}
