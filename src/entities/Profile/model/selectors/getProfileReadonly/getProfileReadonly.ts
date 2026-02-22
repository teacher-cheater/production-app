import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
