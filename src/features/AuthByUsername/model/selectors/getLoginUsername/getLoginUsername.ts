import { StateSchema } from 'app/providers/StoreProviders';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
