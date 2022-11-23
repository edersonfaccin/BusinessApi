import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGroupInput } from './dto/create-group.input';
import { ListInput } from '../common/list.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { Group } from './schemas/group.schema';
import { GroupService } from './group.service';
import { GroupPagination } from './schemas/group.pagination';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Group)
export class GroupResolver {
    constructor(private readonly service: GroupService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Group)
    createGroup(@Args('data') input: CreateGroupInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Group], { name: 'groups' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => GroupPagination, { name: 'groupspage' })
    findAllPage(@Args('listGroupInput') listGroupInput: ListInput) {
        return this.service.getAllPage(listGroupInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Group, { name: 'group' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Group)
    updateGroup(@Args('data') input: UpdateGroupInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Group)
    removeGroup(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}