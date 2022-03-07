import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Album } from '@/models/Album';
import { Photo } from '@/models/Photo';

interface PayloadGetAlbums {}
interface PayloadGetAlbumPhotos {
  albumId: number;
}

export const albumsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_API_BASE_URL }),
  tagTypes: ['Album'],
  reducerPath: 'api/albums',
  endpoints: build => ({
    getAlbums: build.query<Album[], PayloadGetAlbums>({
      query: () => `/albums`,
    }),
    getAlbumPhotos: build.query<Photo[], PayloadGetAlbumPhotos>({
      query: ({ albumId }) => `/albums/${albumId}/photos`,
    }),
  }),
});

export const { useGetAlbumPhotosQuery, useGetAlbumsQuery } = albumsApi;
export const { reducerPath, reducer, middleware } = albumsApi;
