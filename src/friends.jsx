import Friend from './friend';
import { useEffect, useState } from 'react'
export default function Friends(){

    const [friends,setFriends] = useState([]) ;   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res = res.json())
        .then(data=>setFriends(data))
    })
    return(
        <div>
            <h3 className='box'>Friends:{friends.length}</h3>
            {
                friends.map(friend=> <Friend friend ={friend} ></Friend> )
            }
        </div>
    )
}
/**
 * 1.state declaration to hold data
 * 2. useEffect with dependency array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 * 5.display data on the component
 */