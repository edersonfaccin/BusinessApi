import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCategoryInput } from './dto/create-category.input';
import { ListInput } from '../common/list.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './schemas/category.schema';
import { CategoryService } from './category.service';
import { CategoryPagination } from './schemas/category.pagination';

@Resolver(() => Category)
export class CategoryResolver {
    constructor(private readonly service: CategoryService) {}

    @Mutation(() => Category)
    createCategory(@Args('data') input: CreateCategoryInput) {
        return this.service.create(input);
    }

    @Query(() => [Category], { name: 'categorys' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @Query(() => CategoryPagination, { name: 'categoryspage' })
    findAllPage(@Args('listCategoryInput') listCategoryInput: ListInput) {
        return this.service.getAllPage(listCategoryInput)
    }

    @Query(() => Category, { name: 'category' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Category)
    updateCategory(@Args('data') input: UpdateCategoryInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Category)
    removeCategory(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}