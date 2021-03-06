import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
