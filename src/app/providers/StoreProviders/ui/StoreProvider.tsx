import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProviders/config/store';
import { StateSchema } from 'app/providers/StoreProviders/config/StateShema';

interface StoreProviderProps {
    children? : ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
