import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, selectCount, checkStorage } from '../storage/counterSlice'
import Footer from '../components/footer'
import Header from '../components/header'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('aaa')
    dispatch(checkStorage());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <Header />


      <h1 className="relative uppercase font-bold text-5xl flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        Chandan Kumar Gupta {count}
      </h1>

      <div>
        <div>
          <button
            className="mr-5 border-black border p-3"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="mr-5 border-black border p-3"
            aria-label="Increment value"
            onClick={() => dispatch(incrementAsync(1))}
          >
            Async
          </button>
          <button
            className="border-black border p-3"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
