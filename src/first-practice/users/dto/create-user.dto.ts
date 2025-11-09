import { IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  last_name: string;
}
