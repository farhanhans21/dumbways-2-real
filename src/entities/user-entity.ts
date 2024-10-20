import { GetProfileEntityByUser } from "./profile-entity";

export interface CreateRegister {
  id: number;
  email: string;
  password: string;
  username: string;
}
export interface CheckAuth{
  fullname: string;
  biography: string;
  avatarUrl: string;
  background: string;
}

export interface Search {
  username: Pick<CreateRegister, 'username'>;
  profile: GetProfileEntityByUser;
}
