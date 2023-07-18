import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(dto: AuthDto) {
    const user = await this.usersService.findOne(dto.username);
    if (!user) throw new UnauthorizedException('User does not exist');
    const matched = await bcrypt.compare(dto.password, user.password)
    if (!matched)
      throw new UnauthorizedException('Password incorrect');

    return this.generateToken(user.id, user.username, 'user');
  }

  signUp(dto: AuthDto) {
    return this.usersService.create(dto)
  }

  generateToken(userId: number, username: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      username,
      type
    })
  }
}
