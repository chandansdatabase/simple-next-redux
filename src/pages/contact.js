import { Inter } from 'next/font/google'

import Footer from '../components/footer'
import Header from '../components/header'

import { useState, useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

import io from "socket.io-client"
import ChatRoom from '@/components/chatRoom'

const socket = io.connect(process.env.NEXT_PUBLIC_SOCKET_URI);

export default function Contact() {
  const [userId, changeUserId] = useState(socket.id);
  const [name, changeName] = useState("");
  const [room, changeRoom] = useState("");
  const [chatRoom, changeChatRoom] = useState(false);
  const [socketConnection, changeSocketConnection] = useState(socket.connected);


  const onSubmit = async (e) => {
    // e.preventDefault();
    if (room !== '' && name !== "") {
      await socket.emit("room", room)
      changeChatRoom(true);
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      {
        // socketConnection ?
          chatRoom ?
            <ChatRoom socket={socket} userName={name} roomId={room} userId={userId} />
            :
            <div className="my-12 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create A Room
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""
                      onChange={(e) => { changeName(e.target.value) }}
                    />
                  </div>
                  <div>
                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room ID</label>
                    <input type="text" name="room" id="room" placeholder="Room ID" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                      onChange={(e) => { changeRoom(e.target.value) }}
                    />
                  </div>
                  <button onClick={() => onSubmit()} type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>

                </form>
              </div>
            </div>
          // :
          // <div role="alert" className="w-half">
          //   <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          //     Connection Error!
          //   </div>
          //   <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          //     <p>Sorry Server Is Busy Right Now.</p>
          //   </div>
          // </div>
      }
      <Footer />

    </main>
  )
}
