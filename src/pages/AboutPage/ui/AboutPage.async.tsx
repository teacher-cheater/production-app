import { lazy } from 'react';

// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./AboutPage')), 1500);
}));
