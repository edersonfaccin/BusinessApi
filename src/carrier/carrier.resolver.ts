import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCarrierInput } from './dto/create-carrier.input';
import { ListInput } from '../common/list.input';
import { UpdateCarrierInput } from './dto/update-carrier.input';
import { Carrier } from './schemas/carrier.schema';
import { CarrierService } from './carrier.service';
import { CarrierPagination } from './schemas/carrier.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => Carrier)
export class CarrierResolver {
    constructor(private readonly service: CarrierService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Carrier)
    createCarrier(@Args('data') input: CreateCarrierInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Carrier], { name: 'carriers' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => CarrierPagination, { name: 'carrierspage' })
    findAllPage(@Args('listCarrierInput') listCarrierInput: ListInput) {
        return this.service.getAllPage(listCarrierInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Carrier, { name: 'carrier' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Carrier)
    updateCarrier(@Args('data') input: UpdateCarrierInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Carrier)
    removeCarrier(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}