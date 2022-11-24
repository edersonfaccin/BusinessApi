import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStateInput } from './dto/create-state.input';
import { ListInput } from '../common/list.input';
import { UpdateStateInput } from './dto/update-state.input';
import { State } from './schemas/state.schema';
import { StateService } from './state.service';
import { StatePagination } from './schemas/state.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => State)
export class StateResolver {
    constructor(private readonly service: StateService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => State)
    createState(@Args('data') input: CreateStateInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [State], { name: 'states' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => StatePagination, { name: 'statespage' })
    findAllPage(@Args('listStateInput') listStateInput: ListInput) {
        return this.service.getAllPage(listStateInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => State, { name: 'state' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => State)
    updateState(@Args('data') input: UpdateStateInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => State)
    removeState(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}