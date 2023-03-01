import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosAuthUpload } from "../../../config/axios";
import { API_URLS } from "../../../config/url";




export const registerUser = createAsyncThunk(
  "register/registerUser",
   async (newusers) => {
  const response = await axiosAuthUpload().post(`${API_URLS}/users`, newusers);
  console.log(response)
  return response.data;
});

export const uploadImage = createAsyncThunk(
  "images/upload",
  async (formData) => {
    const response = await axios.post("https://api.cloudinary.com/v1_1/dd16bmesr/image/upload", formData);
    console.log(response)
    return response.data.url;
  }
);

const registerationSlice = createSlice({
  name: "images",
 initialState : {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(uploadImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(uploadImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default registerationSlice.reducer;
