import { useNavigate } from "react-router";
import { apiV1 } from "../../../libs/api";
import { setUser } from "../../store/auth.slice";
import { RegisterResponseDTO } from "../../types/register-dto";
import { RegisterFormInput, registerSchema } from "../schema/register.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks/use-store";

function useRegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },} = useForm<RegisterFormInput>({
      resolver: zodResolver(registerSchema)
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: RegisterFormInput){
      try {
        const response = await apiV1.post<RegisterResponseDTO>('/auth/register',data);
        const {user, token} = response.data;

        dispatch(setUser(user));
        Cookies.set('token',token,{expires:1});
        navigate('/')

        console.log(response.data);
        
      } catch (error) {
        console.error(error);

        if (axios.isAxiosError(error) && error.response) {
          const stackMessage = error.response?.data?.stack ?? "";
          if (axios.isAxiosError(error) && error.response) {
            setError('fullName',{
              message: "Full name must be at least 5 characters long"
            })
          }
          if (stackMessage.includes('"email"')) {
            setError('email', {
                message: "Invalid email format",
            });
        }

        if (stackMessage.includes('"password"')) {
            setError('password', {
                message: "Password must be at least 6 characters long",
            });
        }
        } else {
          console.log("Other Error",error);
          
        }
        
      }

    }
    return { register,onSubmit, errors,handleSubmit };
}

export default useRegisterForm;
