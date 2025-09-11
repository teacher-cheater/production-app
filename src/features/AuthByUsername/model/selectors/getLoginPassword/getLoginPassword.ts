import { StateSchema } from 'app/providers/StoreProviders';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
