import { DocumentData } from "firebase/firestore"

type Props = {
    chat: DocumentData
}

function Message({chat}: Props) {


  return <div>
    <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <p className="pt-1 text-sm">
            {chat.message}<br/>
            {chat.userId}
        </p>
    </div>
  </div>
}

export default Message