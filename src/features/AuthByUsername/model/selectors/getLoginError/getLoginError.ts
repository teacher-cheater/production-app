import { StateSchema } from 'app/providers/StoreProviders';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
