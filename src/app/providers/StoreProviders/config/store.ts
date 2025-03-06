import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateShema';

export function createReduxStore(initiaState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initiaState,
    });
}
