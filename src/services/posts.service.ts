import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from '@/models/Post';

interface PayloadGetAllPosts {}

interface PayloadCreatePost {
  title: string;
  body: string;
  userId: number;
}

interface PayloadUpdatePost {
  id: number;
  post: Post;
}

interface PayloadDeletePost {
  id: number;
}

// enum TAGS {
//   POST = 'Post',
// }

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_API_BASE_URL }),
  // tagTypes: [TAGS.POST],
  reducerPath: 'api/posts',
  endpoints: build => ({
    getAllPosts: build.query<Post[], PayloadGetAllPosts>({
      query: () => `/posts`,
      // providesTags: [TAGS.POST],
    }),
    createPost: build.mutation<Post, PayloadCreatePost>({
      query: post => ({
        url: `/posts`,
        method: 'POST',
        body: post,
      }),
      // AUTO REFETCH DATA
      // invalidatesTags: [TAGS.POST],
    }),
    updatePost: build.mutation<Post, PayloadUpdatePost>({
      query: ({ id, post }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: post,
      }),
    }),
    deletePost: build.mutation<Post, PayloadDeletePost>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation } = postsApi;
export const { reducerPath, reducer, middleware } = postsApi;
