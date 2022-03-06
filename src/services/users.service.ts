import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '@/models/User';

interface PayloadGetUsers {}

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_API_BASE_URL }),
  tagTypes: ['User'],
  endpoints: build => ({
    getUsers: build.query<User[], PayloadGetUsers>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
export const { reducerPath, reducer, middleware } = usersApi;
