import { StateSchema } from 'app/providers/StoreProviders';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
