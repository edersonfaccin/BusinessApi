import { Query } from "@nestjs/graphql";

export class AppResolver {

    @Query(() => String)
    getHello(): string {
        return 'Hello World!';
    }
}