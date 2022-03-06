import { postsApi } from './posts.service';

export const apiReducers = {
  [postsApi.reducerPath]: postsApi.reducer,
};

export const apiMiddlewares = [postsApi.middleware];
