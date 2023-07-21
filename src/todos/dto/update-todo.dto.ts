import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsBoolean()
  doneStatus: boolean;
}