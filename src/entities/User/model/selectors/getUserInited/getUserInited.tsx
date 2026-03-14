import { StateSchema } from 'app/providers/StoreProviders';

export const getUserInited = (state: StateSchema) => state.user._inited;
