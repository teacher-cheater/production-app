import { StateSchema } from 'app/providers/StoreProviders';

export const getLoginState = (state: StateSchema) => state?.loginForm;
