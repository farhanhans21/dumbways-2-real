import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStoreDTO } from "../types/dto";

const initialState: UserStoreDTO = {} as UserStoreDTO;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStoreDTO>) => {
      return {
        ...state,
        id: action.payload.id,
        fullName: action.payload.fullName,
        email: action.payload.email,
        role: action.payload.role,
      };
    },
    removeUser(){
      return {} as UserStoreDTO;
    }
    
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;