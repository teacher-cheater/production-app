import { lazy } from 'react';

// @ts-ignore
export const ProfilePageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./ProfilePage')), 1500);
}));
