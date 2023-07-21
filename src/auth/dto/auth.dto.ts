import { IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  username: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  password: string;
}