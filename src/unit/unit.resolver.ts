import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUnitInput } from './dto/create-unit.input';
import { ListInput } from '../common/list.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { Unit } from './schemas/unit.schema';
import { UnitService } from './unit.service';
import { UnitPagination } from './schemas/unit.pagination';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Unit)
export class UnitResolver {
    constructor(private readonly service: UnitService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Unit)
    createUnit(@Args('data') input: CreateUnitInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Unit], { name: 'units' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => UnitPagination, { name: 'unitspage' })
    findAllPage(@Args('listUnitInput') listUnitInput: ListInput) {
        return this.service.getAllPage(listUnitInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Unit, { name: 'unit' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Unit)
    updateUnit(@Args('data') input: UpdateUnitInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Unit)
    removeUnit(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}