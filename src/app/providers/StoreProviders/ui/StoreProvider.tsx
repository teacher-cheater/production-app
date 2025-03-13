import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProviders/config/store';
import { StateSchema } from 'app/providers/StoreProviders/config/StateShema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children? : ReactNode;
    initialState?: DeepPartial<StateSchema> ;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
