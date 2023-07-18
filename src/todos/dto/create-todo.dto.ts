import { IsNotEmpty } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  content: string;
}