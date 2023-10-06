import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: ""
    },
    reducers: {
        // actions
        setUser(state: any, param: any): void{
            state.username = param.payload.username;
            state.password = param.payload.password;
        }
    }
})

// used for the dispatcher
export const userActions = userSlice.actions;