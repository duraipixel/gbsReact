import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerService = createApi({
    reducerPath: 'bannerService',
    baseQuery: fetchBaseQuery({ baseUrl:'https://admin.anandlab.com/public'}),
    endpoints: (builder) => ({
        banners: builder.query({
            query:() => '/api/banners'
        })
    })
})

export const { useBannersQuery } = bannerService;
