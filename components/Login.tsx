import { signIn } from 'next-auth/react'

type Props = {}

export default function Login({}: Props) {
  return (
    <div>
        <button onClick={()=>signIn('github')} 
        className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg">
            Sign in with Github
        </button>
        <button onClick={()=>signIn('google')} 
        className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg">
            Sign in with Google
        </button>
    </div>
  )
}