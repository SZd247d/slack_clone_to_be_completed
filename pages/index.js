import ChatScreen from '../components/ChatScreen'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-700">
      {/* header */}
      <Header />
      {/* sideBar */}
      <div className="flex">
        <SideBar />
        <ChatScreen />
      </div>
    </div>
  )
}
