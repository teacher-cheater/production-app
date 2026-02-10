import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileError = (state: StateSchema) => state?.profile?.error;
