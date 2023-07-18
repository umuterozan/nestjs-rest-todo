import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entities/UserEntity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findOne(username: string) {
    return this.usersRepository.findOneBy({ username })
  }

  findOneById(id: number) {
    return this.usersRepository.findOneBy({ id })
  }

  async create(dto: IUser) {
    dto.password = await this.hashPassword(dto.password)
    const newUser = this.usersRepository.create(dto)
    return this.usersRepository.save(newUser)
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, 10)
  }
}
