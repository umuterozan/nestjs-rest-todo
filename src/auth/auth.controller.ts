import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  async signIn(@Body() dto: AuthDto) {
    const accessToken = await this.authService.signIn(dto)
    return {
      accessToken
    }
  }

  @Post("signup")
  async signUp(@Body() dto: AuthDto) {
    try {
      await this.authService.signUp(dto)
    } catch (err) {
      return { message: err.detail }
    }
  }
}
