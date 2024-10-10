import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { GetPostEntity } from "../../../entities/post-entity";
import { UserEntity } from "../../../entities/user-entity";
import { apiV1 } from "../../../libs/api";
export function userAllPosts() {
  async function getAllPosts() {
    const response = await apiV1.get<null, { data: GetPostEntity[] }>(
      `/getAllPosts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<GetPostEntity[], Error, GetPostEntity[]>(
    {
      queryKey: ["posts"],
      queryFn: getAllPosts,
    }
  );

  return { data, isLoading, getAllPosts };
}
export function useAllReplies() {
  const { postId } = useParams<{ postId: string }>();
  async function getAllreplies() {
    const response = await apiV1.get<null, { data: GetPostEntity[] }>(
      `/getAllReplies/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.get("token")}`,
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<GetPostEntity[], Error, GetPostEntity[]>(
    {
      queryKey: ["replies", postId],
      queryFn: getAllreplies,
      enabled: !!postId,
    }
  );

  return { data, isLoading };
}
export function useAllUsers() {
  async function getAllUsers() {
    const response = await apiV1.get<null, { data: UserEntity[] }>(
    `/getAllUser`,{
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
    );
    return response.data;
  }
  const {data, isLoading} = useQuery<UserEntity[], Error,UserEntity[]>({
    queryKey: ['users'],
    queryFn: getAllUsers
  })
  return {data, isLoading};
}

export function useAllUsersById() {
  const { userId } = useParams<{ userId: string }>();

  async function getAllUsers() {
      const response = await apiV1.get<null, { data: UserEntity }>(
          `/getUserById/${userId}`
      );
      return response.data
  }

  const { data, isLoading } = useQuery<UserEntity, Error, UserEntity>({
      queryKey: ['users', userId],
      queryFn: getAllUsers,
      enabled: !!userId,
  });

  return {
      data,
      isLoading
  }
}