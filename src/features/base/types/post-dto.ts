import { CreatePostEntity } from "../../../entities/threads-entity";

export type PostDTO = CreatePostEntity;

export type CreatePostDTO = Pick<CreatePostEntity, "content" | "image"> & {
  authorId: number;
};
