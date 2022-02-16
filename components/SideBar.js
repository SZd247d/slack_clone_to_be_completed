import React from 'react'
import { AnnotationIcon, InboxIcon } from '@heroicons/react/outline'
import {
  ArchiveIcon,
  BookmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentSearchIcon,
  DocumentTextIcon,
  PencilIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import SideBarOption from './SideBarOption'
import { useState } from 'react'
import { useEffect } from 'react'
import db from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore'

function SideBar() {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'rooms'), (snapshot) => {
      const channels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setChannels(channels)
    })
    return () => unsub()
  }, [db])

  return (
    <div className="min-h-screen w-[250px] overflow-hidden border-t-2 border-t-[#49274b] bg-[#3f0f40]">
      <div className="flex justify-between p-2">
        <div className="">
          <h1 className="text-2xl text-white">Zakaria Sellali</h1>
          <div className="flex">
            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 rounded-full bg-green-700"></div>
              <h2 className="text-white opacity-90">Programmer</h2>

              <UserIcon className=" mx-5 h-10 rounded-full bg-slate-500  p-2 text-white" />
            </div>
          </div>
        </div>
        <div className="p-1 text-2xl">
          <PencilIcon className="m-1 h-7 rounded-full  bg-white p-1  text-[#49274b]" />
        </div>
      </div>
      <div className="border-t-2 border-t-[#49274b]"></div>
      <SideBarOption Icon={AnnotationIcon} title={'Threads'} />
      <SideBarOption Icon={InboxIcon} title={'Mentions & reactions'} />
      <SideBarOption Icon={BookmarkIcon} title={'Channel browser'} />
      <SideBarOption Icon={ArchiveIcon} title={'saved items'} />
      <SideBarOption Icon={UsersIcon} title={'People & user groups'} />
      <SideBarOption Icon={DocumentTextIcon} title={'Apps'} />
      <SideBarOption Icon={DocumentSearchIcon} title={'File browser'} />
      <SideBarOption Icon={ChevronUpIcon} title={'Show less'} />
      <div className="h-[2px] bg-[#49274b]"></div>
      <SideBarOption Icon={ChevronDownIcon} title={'Channels'} />
      <div className="h-[2px] bg-[#49274b]"></div>
      <SideBarOption Icon={PlusIcon} addChannelOption title={'Add Channels'} />

      {/* Connect to DB and list all the channels */}
      {channels.map((channel) => {
        return (
          <SideBarOption
            title={channel.name}
            id={channel.id}
            key={channel.id}
          />
        )
      })}
      {/* <SideBarOption /> */}
    </div>
  )
}

export default SideBar
