import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const dawgsApiKey = 'live_HnqVCNqfDgIsXGPHKLZp56QFTEAMcGgXvUFEmm2lSsq3wPRghlUUQ1xzsauTyI35'
interface Breed{
    id:string,
    name:string,
    image:{
        url:string
    }
}

export const dawgsApiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.thedogapi.com/v1",
        prepareHeaders(headers){
            headers.set('x-api-key',dawgsApiKey)
            return headers
        }
    }),
    endpoints:(builder)=>{
        return{
            fetchBreeds: builder.query<Breed[],number | void>({
                query(limit = 10){
                    return `/breeds/?limit=${limit}`
                }
            })
        }
    }
})

export const  {useFetchBreedsQuery} = dawgsApiSlice