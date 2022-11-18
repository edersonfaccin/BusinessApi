import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCompanyInput } from './dto/create-company.input';
import { ListInput } from '../common/list.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './schemas/company.schema';
import { CompanyService } from './company.service';
import { CompanyPagination } from './schemas/company.pagination';

@Resolver(() => Company)
export class CompanyResolver {
    constructor(private readonly service: CompanyService) {}

    @Mutation(() => Company)
    createCompany(@Args('data') input: CreateCompanyInput) {
        return this.service.create(input);
    }

    @Query(() => [Company], { name: 'companys' })
    findAllReport() {
        return this.service.getAllReport()
    }

    @Query(() => CompanyPagination, { name: 'companyspage' })
    findAllPage(@Args('listCompanyInput') listCompanyInput: ListInput) {
        return this.service.getAllPage(listCompanyInput)
    }

    @Query(() => Company, { name: 'company' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Company)
    updateCompany(@Args('data') input: UpdateCompanyInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Company)
    removeCompany(@Args('_id', { type: () => String }) _id: string) {
        return this.service.delete(_id);
    }
}