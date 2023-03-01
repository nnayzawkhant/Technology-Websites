import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";
import AuthService from "../services/auth.service";

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || ''): null

export const login = createAsyncThunk(
  "auth/login",
  
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      console.log(data)
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isFetching = false;
      state.user = action.payload.user;
    },
    [login.pending]: (state, action) => {
      state.isFetching = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.isFetching = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;