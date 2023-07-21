import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteTodoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}