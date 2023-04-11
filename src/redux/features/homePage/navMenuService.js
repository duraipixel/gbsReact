import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const navMenuService = createApi({
    reducerPath: 'navMenuService',
    baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_BASE_URL}),
    endpoints: (builder) => ({
        navMenu: builder.query({
            query:() => 'get/allMenu'
        })
    })
})
export const { useNavMenuQuery } = navMenuService;
