import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 300)
  content: string;
}