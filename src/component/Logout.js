import React from 'react'
import { auth } from '../firebase'


const style = {
    button:` bg-gray-200 px-4 py-2 hover:bg-green-100`
}

const Logout = () => {
  const user=auth.currentUser
    const signOut= ()=> {
        signOut(auth)
    }
  return (
    
    <button onClick={()=> auth.signOut()}className="px-[2px] py-[2px] bg-slate-500 rounded-full overflow-hidden">
      <img className="h-10 rounded-full" src= {user.photoURL}/>

     
    </button>
    
    
    
  )
}

export default Logout