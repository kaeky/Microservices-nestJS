import { ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { User } from '@microservices/shared';

@ObjectType()
export class UserEntity implements User {
  @Column()
  id: number;

  @Column()
  name: string;
}
