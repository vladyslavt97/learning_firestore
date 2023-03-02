import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
type Props = {}

export default function Chat({}: Props) {
  const {data: session} = useSession();
  return (
    <div>
        <button
            onClick={() => signOut()}
            className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg"
        > Sign Out </button>
        <h1>{session?.user?.name} --- {session?.user?.email}</h1>
        {session?.user?.image && <Image src={session?.user?.image} alt="some" width={100} height={100} className=" rounded-lg"/>}
    </div>
  )
}