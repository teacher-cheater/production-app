import { lazy } from 'react';

// @ts-ignore
export const ArticleDetailsPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./ArticleDetailsPage')), 1500);
}));
