import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627785662f94a1d7060f3490.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),

    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/${contactId}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const {
  useGetContactsQuery,
  // useDeleteContactMutation
} = contactsApi;
