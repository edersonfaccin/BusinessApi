import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCityInput } from './dto/create-city.input';
import { ListInput } from '../common/list.input';
import { UpdateCityInput } from './dto/update-city.input';
import { City } from './schemas/city.schema';
import { CityService } from './city.service';
import { CityPagination } from './schemas/city.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => City)
export class CityResolver {
    constructor(private readonly service: CityService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => City)
    createCity(@Args('data') input: CreateCityInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [City], { name: 'citys' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => CityPagination, { name: 'cityspage' })
    findAllPage(@Args('listCityInput') listCityInput: ListInput) {
        return this.service.getAllPage(listCityInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => City, { name: 'city' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => City)
    updateCity(@Args('data') input: UpdateCityInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => City)
    removeCity(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}