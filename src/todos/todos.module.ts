import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/typeorm/entities/TodoEntity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {}
