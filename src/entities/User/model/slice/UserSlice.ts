import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_STORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: UserSchema) => {
            const user = localStorage.getItem(USER_STORAGE_KEY);
            if (!user) {
                state.authData = JSON.parse(user);
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
