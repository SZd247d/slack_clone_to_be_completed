import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import db from '../firebase'
import { useStateValue } from '../stateProvider'

function SideBarOption({ Icon, title, id, addChannelOption }) {
  const [state, dispatch] = useStateValue()

  const addC = () => {
    dispatch({ type: 'SET_CHANNEL_ID', id: cId })
  }

  const selectChannel = (e) => {
    e.preventDefault()
    if (id) {
      router.push(`/`)
    } else {
      // router.push(title)
    }
  }

  const addChannel = async (e) => {
    const channelName = prompt('Please Add a channel name')
    if (channelName) {
      const col = collection(db, 'rooms')
      await addDoc(col, { name: channelName })
    }
  }

  return (
    <div
      className="text-semibold flex  cursor-pointer items-center  p-2 text-lg text-white opacity-90 hover:bg-[#340e36]"
      onClick={() => {
        addChannelOption ? addChannel : selectChannel
        setChannelId(id)
      }}
    >
      {Icon && <Icon className="h-5 pr-4 text-white" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <div className="flex">
          <h3 className="pl-2 pr-6">#</h3> {title}
        </div>
      )}
    </div>
  )
}

export default SideBarOption
