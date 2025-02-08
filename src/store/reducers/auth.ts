import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { errorAlert } from '../../components/ui/loader/loader';
import { makeApiRequest } from '../../apis/function';
import { API_URLS } from '../../apis/urls';

export interface User {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  token?: string;
  msg?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
};

// Define a return type for error messages
type AuthError = string;

// ✅ Login Async Thunk - return type explicitly defined
export const login = createAsyncThunk<User, { email: string; password: string }, { rejectValue: AuthError }>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data: User = await makeApiRequest('POST', API_URLS.LOGIN, credentials);
      return data;
    } catch (error: any) {
      const errorMessage = error?.message || 'Login failed';
      errorAlert(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// ✅ Register Async Thunk - return type explicitly defined
export const register = createAsyncThunk<User, { name: string; email: string; password: string }, { rejectValue: AuthError }>(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const data: User = await makeApiRequest('POST', API_URLS.REGISTER, userInfo);
      return data;
    } catch (error: any) {
      const errorMessage = error?.message || 'Registration failed';
      errorAlert(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.clear();
    },
    checkAuth: (state) => {
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        state.status = 'succeeded';
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(action.payload)
        localStorage.setItem('user', JSON.stringify(action.payload));
        localStorage.setItem('token', action.payload.token || '');
      })
      .addCase(login.rejected, (state, action: PayloadAction<AuthError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action: PayloadAction<AuthError | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Registration failed';
      });
  },
});

export const { logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
