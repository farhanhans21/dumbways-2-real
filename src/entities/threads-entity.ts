import { ReplyEntity } from "./reply-entity";
import { CreateRegister } from "./user-entity";



export interface CreateThreadEntity {
    id: number;
    userId: Pick<CreateRegister,'id'>
    mainThreadId?: number;
    content?: string;
    image?: FileList;
    likesCount?: number;
    repliesCount?: number;
    timeAgo?: string;
    createdAt: string;
    updatedAt: Date;
    author:  Omit<UserEntity, 'password'>;
    Reply: ReplyEntity[];
}