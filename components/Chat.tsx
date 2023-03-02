import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Sidebar from "./Sidebar";

type Props = {}

export default function Chat({}: Props) {
  const {data: session} = useSession();
const addNewUser = async() => {
        const doc = await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats'), {
                message: "Hi Borther",
                userId: session?.user?.email!,
                createdAt: serverTimestamp()
        });
    }

  return (
    <div>
        <button
            onClick={() => signOut()}
            className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg"
        > Sign Out </button>
        <button onClick={addNewUser}>add</button>
        <div className="absolute top-6 right-0 flex flex-col-reverse justify-end items-end">
          <h1>{session?.user?.name}<br/>{session?.user?.email}</h1>
          {session?.user?.image && <Image src={session?.user?.image} alt="some" width={100} height={100} className=" rounded-lg"/>}
        </div>

        <Sidebar />
    </div>
  )
}