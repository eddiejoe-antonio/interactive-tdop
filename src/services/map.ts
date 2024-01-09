import baseApi from '@/app/baseApi';

// Define a service using a base URL and expected endpoints
export const MapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getUsers: builder.query<any[], void>({
      // providesTags: (result) => {
      //   if (result) {
      //     console.log(result);
      //     return [
      //       ...result.map(({ id }) => ({ id, type: 'MapData' }) as const),
      //       { id: 'LIST', type: 'User' as const },
      //     ];
      //   } else {
      //     return [];
      //   }
      // },
      query: () => ({
        method: 'GET',
        url: '/users',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMapDataQuery,
  useCreateMapDataMutation,
} = MapApi;
