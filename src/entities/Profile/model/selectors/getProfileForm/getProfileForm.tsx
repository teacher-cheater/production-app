import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
