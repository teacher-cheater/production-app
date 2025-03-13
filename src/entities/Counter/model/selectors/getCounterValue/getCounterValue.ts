import { StateSchema } from 'app/providers/StoreProviders';

export const getCounterValue = (state: StateSchema) => state.counter.value;
