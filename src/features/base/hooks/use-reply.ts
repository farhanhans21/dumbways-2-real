import { zodResolver } from "@hookform/resolvers/zod";
import { CreateReplyForm, replySchema } from "../schema/reply-schema";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from 'js-cookie';
import { CreateReplyDTO } from "../types/reply-dto";
import { useForm } from "react-hook-form";
import { apiV1 } from "../../../libs/api";
import { useAllReplies } from "./use-all";
export function useReplyForm(){
  const {
    register,
    handleSubmit,
    formState:{errors, isSubmitting}} = useForm<CreateReplyForm>({
      resolver: zodResolver(replySchema)
    });
  const {postId} = useParams<{postId: string}>();
  const queryClient = useQueryClient();
  
  async function createReply(data: CreateReplyDTO){
    const replyData = {...data, postId};

    const response = await apiV1.post(`/post/${postId}/reply`,replyData,{
      headers:{
        Authorization:`Bearer ${Cookies.get("token")}`,
        'Content-Type': 'multipart/form-data',
      }
    });

    useAllReplies()
    queryClient.invalidateQueries({queryKey:['reply-post',postId]})
    return response.data;
  }
  
  const {mutateAsync: createReplyAsync} = useMutation<
  CreateReplyDTO,
  Error,
  CreateReplyDTO>({
    mutationKey:['createReply'],
    mutationFn: createReply
  })

  async function onSubmit(data:CreateReplyForm) {
    try {
      await createReplyAsync(data);
      alert("Successfully create a post reply!");

    } catch (error) {
      console.error("Error creating post: " , error);
      alert("Failed to reply to post!")
      
    }
  };
  return{
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  }
}