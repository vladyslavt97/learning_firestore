import { useSession } from 'next-auth/react';
import React from 'react'
import {useCollection} from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from '@/firebase';

type Props = {}

export default function Sidebar({}: Props) {
  const {data: session} = useSession();
    //
    const [chats, loading, error] = useCollection(
      session && query(collection(db, 'users', session.user?.email!, 'chats'), 
          orderBy('createdAt', 'asc'),
      )
    );
    console.log('ch', chats);
    
    if(loading){
      return <h1>thinking...</h1>
    }
  return (
    <div>
      <div>Sidebar</div>
      {chats?.docs.map((chat, index) => (
        <div key={index}>
          <h2>{chat.id}</h2>
        </div>
      ))}
  </div>
  )
}