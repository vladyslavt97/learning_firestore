import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { addDoc, collection, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Sidebar from "./Sidebar";
import { FormEvent, useRef, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

type Props = {}

export default function Chat({}: Props) {
  const [message, setMessage] = useState('');
  const {data: session} = useSession();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'), {
          message: message,
          userId: session?.user?.email!,
          createdAt: serverTimestamp()
    });
  };


  const [chats, loading, error] = useCollection(
      session && query(
      collection(
          db,
          'users', 
          session?.user?.email!, 
          'chats',
          // 'aQAdYzGAiP13YwFQFnbW',
          // 'message'
          ),
          orderBy('createdAt', 'asc')
  ))

  console.log('m', chats?.docs);

  if(error){
    console.log('error:', error);
  }
  
  

  return (
    <div>
        <button
            onClick={() => signOut()}
            className="absolute bottom-0 text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg"
        > Sign Out </button>
        <div className="absolute top-6 right-0 flex flex-col-reverse justify-end items-end">
          <h1>{session?.user?.name}<br/>{session?.user?.email}</h1>
          {session?.user?.image && <Image src={session?.user?.image} alt="some" width={100} height={100} className=" rounded-lg"/>}
        </div>

        <Sidebar />
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message}/>
          <button type="submit">send</button>
        </form>

        {chats?.docs.map((chat, index) => (
          <Message key={chat.id} chat={chat.data()} />
        ))}
    </div>
  )
}