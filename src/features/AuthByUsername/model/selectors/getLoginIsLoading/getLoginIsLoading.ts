import { StateSchema } from 'app/providers/StoreProviders';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
