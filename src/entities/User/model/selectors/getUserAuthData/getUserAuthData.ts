import { StateSchema } from 'app/providers/StoreProviders';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
