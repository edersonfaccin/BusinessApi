import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGroupInput } from './dto/create-group.input';
import { ListInput } from '../common/list.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { Group } from './schemas/group.schema';
import { GroupService } from './group.service';
import { GroupPagination } from './schemas/group.pagination';

@Resolver(() => Group)
export class GroupResolver {
    constructor(private readonly service: GroupService) {}

    @Mutation(() => Group)
    createGroup(@Args('data') input: CreateGroupInput) {
        return this.service.create(input);
    }

    @Query(() => [Group], { name: 'groups' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @Query(() => GroupPagination, { name: 'groupspage' })
    findAllPage(@Args('listGroupInput') listGroupInput: ListInput) {
        return this.service.getAllPage(listGroupInput)
    }

    @Query(() => Group, { name: 'group' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Group)
    updateGroup(@Args('data') input: UpdateGroupInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Group)
    removeGroup(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}