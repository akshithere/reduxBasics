//goal is to revise RTK query and see tags and provideTags feature in live
import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface user{
    id:string,
    name:string,
    username:string,
    email:string,
    address?:{

    },
    phone?:string,
    website?:string,
    company?:{
        name?:string
    }
}
interface post{
    userId:string,
    id:string,
    title:string,
    body:string
}
type posts= post[]
type users = user[]
export const feedApiSlice = createApi({
    reducerPath:'feedSlice',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
        prepareHeaders(headers){
            return headers
        }
    }),
    tagTypes:['users','posts'],
    //endpoints fuild ek callback le raha hai jo ki ek object return kar raha hai () iske andar
    endpoints: (builder) => {
        return {
            fetchUsers: builder.query<users,void>({
                query(){return `/users`},
                providesTags:['users']
            }),
            fetchPosts: builder.query<posts,void>({
                query(){return `/posts`},
                providesTags:['posts']
        })
          
        }
    }
})
export const {useFetchUsersQuery,useFetchPostsQuery} = feedApiSlice
