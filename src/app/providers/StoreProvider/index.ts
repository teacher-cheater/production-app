import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateShema';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
