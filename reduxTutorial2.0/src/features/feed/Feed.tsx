import { useAppSelector } from "../../app/hooks"
import { useFetchUsersQuery,useFetchPostsQuery } from "./FeedApi"
export default function Feed(){
    const {data:userData=[],isError,isLoading,isSuccess,isFetching} = useFetchUsersQuery()
    const {data:postData=[]} = useFetchPostsQuery()
    // const {data=[]} = use
    if(isError) return`Error my nigga`
    if(isLoading) return`Loading my nigga`
    if(isFetching) return `Fetching my nigga`
    return(
       <div>
        <h1>User:</h1>
       {userData.map((user)=>(
        <div key={user.id}>
        <h1>{user.name}</h1>
        {postData.map((post)=>{
            if(post.userId==user.id){
                return <div>
                    <h1>Post: {post.title}</h1>
                    <h3>Post body: {post.body}</h3>
                    <h4>Post by: {user.name}</h4>
                </div>
            }
        })}
        </div>
       )
       
    )
}
</div>
    )
}