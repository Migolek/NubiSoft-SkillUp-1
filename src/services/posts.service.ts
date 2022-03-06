import { Post } from '@/models/Post';
import { emptySplitApi } from '@/services/helpers';

interface PayloadGetPosts {}

export const postsApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<Post[], PayloadGetPosts>({
      query: () => '/posts',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery } = postsApi;
export const { reducerPath, reducer, middleware } = postsApi;
