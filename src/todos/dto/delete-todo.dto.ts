import { IsNotEmpty } from "class-validator";

export class DeleteTodoDto {
  @IsNotEmpty()
  id: number;
}