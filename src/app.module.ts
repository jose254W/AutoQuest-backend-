import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ComponentsModule } from './components/components.module';
import { RentalController } from './controller/controller.module';
import { InMemoryLRUCache } from 'apollo-server-caching';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: true,
      sortSchema: true,
      path: 'https://autoquest-backend-production.up.railway.app/graphql',
      persistedQueries: {
        cache: new InMemoryLRUCache({
          maxSize: 1000, // set a maximum size for the cache to avoid memory exhaustion attacks
        }),
      },
    }),
    ComponentsModule,
  ],
  controllers: [AppController, RentalController],
  providers: [AppService],
})
export class AppModule {}
