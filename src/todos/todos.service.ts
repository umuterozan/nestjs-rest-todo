import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/typeorm/entities/TodoEntity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
    private usersService: UsersService
  ) {}

  findAll(userId: number) {
    return this.todosRepository.find({
      order: { createdAt: 'DESC' },
      where: { user: { id: userId }},
    })
  }

  async create(createTodoDto: CreateTodoDto, userId: number) {
    const user = await this.usersService.findOneById(userId)
    const newTodo = this.todosRepository.create({
      ...createTodoDto,
      user
    })
    return this.todosRepository.save(newTodo)
  }

  update(updateTodoDto: UpdateTodoDto, userId: number) {}

  delete(deleteTodo: DeleteTodoDto, userId: number) {}
}
