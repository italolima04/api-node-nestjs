import { IsNotEmpty, IsEmail, MaxLength, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({
    message: 'Informe um endereço de Email.',
  })
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de Email válido.',
    },
  )
  @MaxLength(200, {
    message: 'O tamanho máximo do email é de 200 caracteres.',
  })
  email: string;

  @IsNotEmpty({
    message: 'Informe um nome correspondente.',
  })
  @MaxLength(200, {
    message: 'O tamanho máximo do nome é de 200 caracteres.',
  })
  name: string;

  @IsNotEmpty({
    message: 'Informe uma senha.',
  })
  @MinLength(6, {
    message: 'O tamanho mínimo para senha é de 6 caracteres.',
  })
  password: string;

  @IsNotEmpty({
    message: 'Informe uma confirmação de senha.',
  })
  @MinLength(6, {
    message: 'O tamanho mínimo para a confirmação de senha é de 6 caracteres.',
  })
  passwordConfirmation: string;
}
