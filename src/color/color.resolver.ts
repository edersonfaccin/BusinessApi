import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateColorInput } from './dto/create-color.input';
import { ListInput } from '../common/list.input';
import { UpdateColorInput } from './dto/update-color.input';
import { Color } from './schemas/color.schema';
import { ColorService } from './color.service';
import { ColorPagination } from './schemas/color.pagination';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-guard';

@Resolver(() => Color)
export class ColorResolver {
    constructor(private readonly service: ColorService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Color)
    createColor(@Args('data') input: CreateColorInput) {
        return this.service.create(input);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Color], { name: 'colors' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => ColorPagination, { name: 'colorspage' })
    findAllPage(@Args('listColorInput') listColorInput: ListInput) {
        return this.service.getAllPage(listColorInput)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Color, { name: 'color' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Color)
    updateColor(@Args('data') input: UpdateColorInput) {
        return this.service.update(input._id, input);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Color)
    removeColor(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}