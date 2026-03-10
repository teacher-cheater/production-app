import { profileActions, profileReducer, ProfileSchema } from 'entities/Profile';

describe('profileSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
});
