import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from './schemas/state.schema';
import { StateResolver } from './state.resolver';
import { StateService } from './state.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: State.name, schema: StateSchema 
    }])
  ],
  providers: [
    StateService,
    StateResolver
  ]
})
export class StateModule {}