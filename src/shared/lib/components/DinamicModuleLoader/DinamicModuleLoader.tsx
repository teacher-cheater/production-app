import { useEffect, FC } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProviders';
import { StateSchemaKey } from 'app/providers/StoreProviders/config/StateShema';

interface DinamicModuleLoaderProps {
    name: StateSchemaKey;
    reducer: Reducer;

}

export const DinamicModuleLoader: FC<DinamicModuleLoaderProps> = (props) => {
    const { children, name, reducer } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
        return () => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
