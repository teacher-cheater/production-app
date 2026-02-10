import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
