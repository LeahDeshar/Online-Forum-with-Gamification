import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  handleLogin() {}

  //   api/auth/google/redirect
  @Get('google/redirect')
  handleRedirect() {
    return { msg: 'OK' };
  }
}
