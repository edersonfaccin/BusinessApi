import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCountryInput } from './dto/create-country.input';
import { ListInput } from '../common/list.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './schemas/country.schema';
import { CountryService } from './country.service';
import { CountryPagination } from './schemas/country.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => Country)
export class CountryResolver {
    constructor(private readonly service: CountryService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Country)
    createCountry(@Args('data') input: CreateCountryInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Country], { name: 'countries' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => CountryPagination, { name: 'countriespage' })
    findAllPage(@Args('listCountryInput') listCountryInput: ListInput) {
        return this.service.getAllPage(listCountryInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Country, { name: 'country' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Country)
    updateCountry(@Args('data') input: UpdateCountryInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Country)
    removeCountry(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}