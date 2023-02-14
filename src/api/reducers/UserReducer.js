import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

let datas = [
  {
    name: "Israel",
    age: 21,
    job: "frontend developer",
    country: "France",
    hobby: "Reading",
    id: 1,
  },
  {
    name: "David",
    age: 22,
    job: "backend developer",
    country: "Germany",
    hobby: "Gist",
    id: 2,
  },
  {
    name: "Michael",
    age: 35,
    job: "backend developer",
    country: "UK",
    hobby: "Football",
    id: 3,
  },
  {
    name: "Frank",
    age: 24,
    job: "mobile developer",
    country: "USA",
    hobby: "Reading",
    id: 4,
  },
  {
    name: "Xavi",
    age: 26,
    job: "devops",
    country: "Spain",
    hobby: "Movies",
    id: 5,
  },
];

export const getUsers = createAsyncThunk("allusers", async () => {
  try {
    let res;
    res = {
      code: 200,
      message: "User retrieved successfully",
      data: datas,
    };
    console.log("Users Data: ", res);
    return res;
  } catch (e) {
    console.log("Get users error: ", e);
  }
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

export const { usersCleanup } = UserSlice.actions;

export default UserSlice.reducer;
