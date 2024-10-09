import { useAppDispatch } from "../features/store/hooks/use-store";
import { apiV1 } from "../libs/api";
import AppRouter from "../router";
import { UserStoreDTO } from "../features/types/dto";
import { setUser } from "../features/store/auth.slice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  async function checkAuth() {
    const {data} = await apiV1.get<null,{data: UserStoreDTO }>("/auth/check",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    dispatch(setUser(data))
  }
  useEffect(()=>{checkAuth()},[]);
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
