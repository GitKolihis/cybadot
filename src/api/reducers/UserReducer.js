import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data";

export const getUsers = createAsyncThunk("allusers", async () => {
  let res;
  res = {
    code: 200,
    message: "User retrieved successfully",
    data: data,
  };
  console.log("Users Data: ", res);
  return res;
});

export const UserSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    status: "idle",
    loading: false,
  },
  reducers: {
    usersCleanup: (state) => {
      state.status = "idle";
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // get all users
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.userList = action?.payload?.data;
      state.status = "success";
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
      state.status = "failed";
    });
  },
});

export const { usersCleanup} = UserSlice.actions

export default UserSlice.reducer;
