import { InformationCircleIcon, StarIcon } from '@heroicons/react/outline'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import db from '../firebase'
import { useStateValue } from '../stateProvider'

function chatScreen() {
  const [state, dispatch] = useStateValue()
  const [roomDetails, setRoomDetails] = useState(null)
  console.log(state)

  useEffect(async () => {
    // if (id) {
    //   // const unsub = onSnapshot(collection(db, 'rooms'), (snapshot) => {
    //   //   const room = snapshot.docs.find((doc) => doc.id === roomId)
    //   //   if (room) {
    //   //     setRoomDetails(room.data())
    //   //   }
    //   // })
    //   // return () => {
    //   //   unsub()
    //   // }
    //   const docref = doc(db, `rooms/${id}`)
    //   const docSnap = await getDoc(docref)
    //   setRoomDetails(docSnap.data())
    // }
  })

  return (
    <div className="flex h-12 w-full items-center justify-between border-b-2 border-gray-500 p-7">
      <div>
        <h4 className="flex items-center space-x-1">
          <strong className="lowercase">#{roomDetails?.name}</strong>
          <StarIcon className="h-4" />
        </h4>
      </div>
      <div>
        <p className="flex items-center space-x-1">
          <InformationCircleIcon className="h-4" /> <p>Details</p>
        </p>
      </div>
    </div>
  )
}

export default chatScreen
