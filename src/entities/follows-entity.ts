import { CreateRegister } from "./user-entity";

export interface createFollower{
  followerId: Pick<CreateRegister,'id'>,
  following : number
}