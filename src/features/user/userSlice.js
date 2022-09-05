import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserLocalStorage,
  setUserLocalStorage,
  removeUserLocalStorage,
} from "../../utils/localstorage";
import {
  registerThunk,
  loginThunk,
  updateThunk,
  clearStoreThunk,
} from "./thunkFunctions";

const initialState = {
  isLoading: false,
  isSidebar: false,
  user: getUserLocalStorage(),
};

// REGISTER USER
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerThunk("/auth/register", user, thunkAPI);
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginThunk("/auth/login", user, thunkAPI);
  }
);

// UPDATE USER
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateThunk("/auth/updateUser", user, thunkAPI);
  }
);

// CLEAR ENTIRE STORE
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    logoutUser: (state) => {
      state.isSidebar = false;
      state.user = null;
      removeUserLocalStorage();
    },
  },
  extraReducers: {
    // REGISTER USER
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`Hey There ${user.name} 🤩`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.error(payload);
    },
    // LOGIN USER
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`Welcome back ${user.name} 😊`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.error(`${payload} 🤨`);
    },
    // UPDATE USER
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`User Updated! 👨🏻‍🚀`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload} 💀`);
    },
    [clearStore.rejected]: () => {
      toast.error("There was an error...");
    },
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
