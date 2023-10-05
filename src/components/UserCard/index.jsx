import React,{useState , useEffect}  from 'react'
import axios from 'axios'
import "./index.scss"

const url = `http://localhost:3000/UsersList.json`;
console.log(url)

const UserCard = () => {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  
  useEffect(() =>{
      axios.get(url)
      .then((response) =>{
        console.log(response.data,"userData");
      })
      .catch((error) =>{
        console.log(error)
      })
  
  },[])
// console.log(userList)
  return (
    <div  className='card'>
     <div className='userName'>
        <h1>Test user</h1>
     </div>
     <div className='userPost'>
        <h2>post</h2>
     </div>
    </div>
  )
}

export default UserCard
