import React, { useState,useEffect, useRef } from 'react'
import Message from './Message'
import { auth, db } from '../firebase'
import Sendmessage from './Sendmessage'
import {query, collection,orderBy,onSnapshot } from 'firebase/firestore'
const style={
    main:` flex flex-col p-[10px] relative overflow-auto`

}

const Chat = () => {
    const [messages,setMessages] = useState([]);
    const scroll = useRef()

    useEffect(()=>{
        const w = query(collection(db,'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(w,(querySnapshot)=>{
            let messages=[]
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(),id: doc.id})
            })
            setMessages(messages)
            
        })
        return () => unsubscribe();
    },[])
    
  return (
     <>
    {auth.currentUser && <main className={style.main }>
        {messages && messages.map((message)=>(
            
    
            <Message key={message.id} message={message} />
        ))}
      
    </main>}
    <Sendmessage scroll={scroll}/>
    <span  ref={scroll}>
       
    </span>
    </>
  )
}

export default Chat