import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:2000/api/signin', {email, password});
            let data = response.data;
            console.log("Token");
            console.log(data);
            if(response.status === 200) {
                localStorage.setItem('token', data.accessToken);
                return data;
            }else {
                return thunkApi.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkApi.rejectWithValue(e.response.data);
        }
    }
)

const authSlice = createSlice ({
    name : 'auth',
    initialState : {
        token : null,
        isAuthenticated: false,
        isLoading: false,
        error: null
    },
    reducers : {
        logout : (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;