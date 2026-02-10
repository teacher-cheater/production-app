import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
