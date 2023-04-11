import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerService = createApi({
    reducerPath: 'bannerService',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints: (builder) => ({
        banners: builder.query({
            query:() => 'get/banners'
        })
    })
})

export const { useBannersQuery } = bannerService;
