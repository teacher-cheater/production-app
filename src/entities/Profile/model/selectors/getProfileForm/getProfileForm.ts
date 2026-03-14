import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileForm = (state: StateSchema) => {
    console.log('--------', state);
    return state.profile?.form;
};
