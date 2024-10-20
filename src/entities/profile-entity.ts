import { CreateRegister } from "./user-entity";

export interface GetProfileEntityByUser {
  id: number;
  fullname?: string;
  biography?: string;
  avatarUrl?: string;
  background?: string;
  userId: number;
}
export interface updateProfileEntity{

}