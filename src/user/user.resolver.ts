import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';
import { ListInput } from 'src/common/list.input';
import { AuthUserInput } from './dto/auth-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Login } from './schemas/login.schema';
import { UserPagination } from './schemas/user.pagination';
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

    @UseGuards(GqlAuthGuard)
    @Query(() => [User], { name: 'users' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => UserPagination, { name: 'userspage' })
    findAllPage(@Args('listUserInput') listUserInput: ListInput) {
        return this.service.getAllPage(listUserInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => User, { name: 'user' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => User)
    updateUser(@Args('data') input: UpdateUserInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => User)
    removeUser(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}