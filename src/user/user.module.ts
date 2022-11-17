import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from './schemas/user.schema';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: User.name, schema: UserSchema 
    }]),
    forwardRef(() => AuthModule)
  ],
  providers: [
    UserService,
    UserResolver
  ]
})
export class UserModule {}