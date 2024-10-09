import { UserEntity } from "../../../entities/user-entity";

export type UpdateUserDTO = Pick<
UserEntity,'fullName' | 'email' | 'bio'
>;