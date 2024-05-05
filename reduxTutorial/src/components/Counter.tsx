
import { useTypeSafeDispatch, useTypeSafeSelector } from "../app/hooks"
import { increment, decrement } from "../features/counter/counterSlice"
import { useFetchBreedsQuery } from "../features/dogs-api-slice/dawgApiSlice"
export default function Counter(){
    const dispatch = useTypeSafeDispatch()
    const value = useTypeSafeSelector((state)=>state.firstSliceReducerLabel.value)
    const {data = [],isFetching, error} = useFetchBreedsQuery()
    if(isFetching) return <div>Loading my nigga</div>
    if(error) return <div>Error my nigga</div>
    return(
        <>
        <button onClick={()=>{
            // dispatch function expects an action object like dispatch({ type: 'INCREMENT' });
// but we can pass an action creator too 
            dispatch(increment())
        }}>Increment</button>
        {value}
        <button onClick={()=>{
            dispatch(decrement())
}}>Decrement</button>
<div>
    <p>Number of dogs fetched {data.length}</p>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            {data.map((breed)=>{
                return <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <img src={breed.image.url} alt="" height={250} />
                </tr>
            })}
        </tbody>
    </table>
</div>
        </>
    )
}