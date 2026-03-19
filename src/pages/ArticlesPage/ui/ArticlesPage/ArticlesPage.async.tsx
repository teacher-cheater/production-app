import { lazy } from 'react';

// @ts-ignore
export const ArticlesPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./ArticlesPage')), 1500);
}));
