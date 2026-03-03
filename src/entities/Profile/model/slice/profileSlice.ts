import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
