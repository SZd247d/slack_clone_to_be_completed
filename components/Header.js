import {
  SearchIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  GlobeIcon,
} from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="flex items-center justify-between bg-[#3f0f40] p-3 ">
      <div className="flex items-center justify-between">
        <UserIcon className="mx-5 h-10 rounded-full bg-slate-500  p-2 text-white " />
        <ClockIcon className=" flex-end ml-auto h-7 justify-end text-white " />
      </div>
      <div className="flex max-w-xs grow justify-center rounded-md border-2 border-fuchsia-800  bg-[#4f1450] p-1 sm:max-w-md lg:max-w-2xl">
        <SearchIcon className=" mx-5 h-6 text-white" />
        <input
          type="text"
          placeholder="Search Slack"
          className="ml-4 grow border-none bg-transparent text-white outline-none"
        />
      </div>
      <QuestionMarkCircleIcon className="mr-3 h-7 text-white" />
    </div>
  )
}

export default Header
