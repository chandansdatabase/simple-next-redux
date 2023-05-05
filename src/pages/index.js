import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, selectCount, checkStorage, setCount } from '../storage/counterSlice'
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
        Khelo
      </h1>
      <h1 className='text-5xl'>{count}</h1>
      <div>
        <div>
        <button
            className="mr-5 border-black border p-3"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="mr-5 border-black border p-3"
            aria-label="Increment value"
            onClick={() => dispatch(incrementAsync(1))}
          >
            Async
          </button>
          <button
            className="mr-5 border-black border p-3"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>
        {

        <div className='mt-5 flex items-center justify-center'>
          <button
            className="bg-red-500 text-white border p-3 hover:bg-red-600"
            aria-label="Increment value"
            onClick={() => dispatch(setCount(0))}
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
        }
      </div>

      <Footer />
    </main>
  )
}
