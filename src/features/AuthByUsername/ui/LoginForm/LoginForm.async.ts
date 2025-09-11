import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./LoginForm')), 1500);
}));
