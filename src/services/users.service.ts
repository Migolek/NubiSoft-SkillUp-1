import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Album } from '@/models/Album';
import { Post } from '@/models/Post';
import { User } from '@/models/User';

interface PayloadGetUsers {}

interface PayloadGetUserData {
  userId: number;
}

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_API_BASE_URL }),
  tagTypes: ['User'],
  reducerPath: 'api/users',
  endpoints: build => ({
    getUsers: build.query<User[], PayloadGetUsers>({
      query: () => `/users`,
      keepUnusedDataFor: 5, // default is 60 seconds
    }),
    getUserPosts: build.query<Post[], PayloadGetUserData>({
      query: ({ userId }) => `/users/${userId}/posts`,
    }),
    getUserAlbums: build.query<Album[], PayloadGetUserData>({
      query: ({ userId }) => `/users/${userId}/albums`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserPostsQuery, useGetUserAlbumsQuery } = usersApi;
export const { reducerPath, reducer, middleware } = usersApi;
