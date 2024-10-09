import { ReplyEntity } from "../../../entities/reply-entity";

export type ReplyDTO = ReplyEntity

export type CreateReplyDTO  =  Pick<
ReplyEntity, 'content' | 'image'
>;