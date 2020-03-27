import { UserPipe } from './user.pipe';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userConstraints } from './constraint';
import { UserController } from './user.controller';
import { CommonModule } from '../common/common.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, UserService, ...userConstraints],
  exports: [UserPipe, UserService, ...userConstraints],
})
export class UserModule {}
