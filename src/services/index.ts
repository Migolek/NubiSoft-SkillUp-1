import { albumsApi } from '@/services/albums.service';
import { postsApi } from '@/services/posts.service';
import { usersApi } from '@/services/users.service';

export const apiReducers = {
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [albumsApi.reducerPath]: albumsApi.reducer,
};

export const apiMiddlewares = [postsApi.middleware, usersApi.middleware, albumsApi.middleware];
