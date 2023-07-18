import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getTodos(@Request() req: any) {
    return await this.todosService.findAll(req.user.sub)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createTodo(@Request() req: any, @Body() createTodoDto: CreateTodoDto) {
    return await this.todosService.create(createTodoDto, req.user.sub)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  async updateTodo(@Request() req: any, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todosService.update(updateTodoDto, req.user.sub)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  async deleteTodo(@Request() req: any, @Body() deleteTodoDto: DeleteTodoDto) {
    return await this.todosService.delete(deleteTodoDto, req.user.sub)
  }
}
