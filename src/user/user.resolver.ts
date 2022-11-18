import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthUserInput } from './dto/auth-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Login } from './schemas/login.schema';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Mutation(() => User)
    createUser(@Args('data') input: CreateUserInput) {
        return this.service.create(input);
    }

    @Mutation(() => Login)
    login(@Args('data') input: AuthUserInput) {
        return this.service.login(input);
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => User)
    updateUser(@Args('data') input: UpdateUserInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => User)
    removeUser(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}