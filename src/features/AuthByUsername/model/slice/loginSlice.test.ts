import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin123'),
        )).toEqual({ username: 'admin123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '1231' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
