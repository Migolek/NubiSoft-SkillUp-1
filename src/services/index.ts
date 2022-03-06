import { postsApi } from './posts.service';
import { usersApi } from './users.service';

export const apiReducers = {
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
};

export const apiMiddlewares = [postsApi.middleware, usersApi.middleware];
