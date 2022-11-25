import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateBankInput } from './dto/create-bank.input';
import { ListInput } from '../common/list.input';
import { UpdateBankInput } from './dto/update-bank.input';
import { Bank } from './schemas/bank.schema';
import { BankService } from './bank.service';
import { BankPagination } from './schemas/bank.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => Bank)
export class BankResolver {
    constructor(private readonly service: BankService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bank)
    createBank(@Args('data') input: CreateBankInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Bank], { name: 'banks' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => BankPagination, { name: 'bankspage' })
    findAllPage(@Args('listBankInput') listBankInput: ListInput) {
        return this.service.getAllPage(listBankInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Bank, { name: 'bank' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bank)
    updateBank(@Args('data') input: UpdateBankInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bank)
    removeBank(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}