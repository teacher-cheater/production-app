import { StateSchema } from 'app/providers/StoreProviders';

export const getCounter = (state: StateSchema) => state.counter;
