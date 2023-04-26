import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, quantityManage } from '../storage/cartSlice'
import Footer from '../components/footer'
import Header from '../components/header'
import { useEffect } from 'react'
import Image from 'next/image'
import find from 'lodash/find'

const inter = Inter({ subsets: ['latin'] })
const products = [
  {
    id: 1,
    name: 'potato',
    price: 100
  },
  {
    id: 2,
    name: 'onion',
    price: 80
  },
  {
    id: 3,
    name: 'tomato',
    price: 210
  }
]
export default function Projects() {

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('aaa')
    // dispatch(checkStorage());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <Header />

      <div className='flex flex-row justify-evenly my-5'>
        {
          products.map((p, key)=>(
            <div key={key} className="w-full m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <Image
                    className="p-8 rounded-t-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR6Ap_L-a5EsSeDCIPggUn1Tz-j0jI2tBvKITwqMfRv5tZuzCs3tT-QXnwgzz4h6Iq_k&usqp=CAU"
                    alt="product image"
                    width={400}
                    height={400}
                    priority
                  />
              </a>
              <div className="px-5 pb-5">
                  <a href="#">
                      <h5 className="text-xl uppercase font-semibold tracking-tight text-gray-900 dark:text-white">{p.name}</h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{p.price}</span>
                      {
                        find(cart, ['id', p.id])?
                          <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{find(cart, ['id', p.id]).quantity===1? dispatch(remove(p.id)):dispatch(quantityManage({id:p.id, quantity:find(cart, ['id', p.id]).quantity-1}))}}> - </span>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={find(cart, ['id', p.id]).quantity} min="1" readOnly={true} />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>dispatch(quantityManage({id:p.id, quantity:find(cart, ['id', p.id]).quantity+1}))}> + </span>
                          </div>
                          :
                          <a href="#" onClick={()=>{dispatch(add(p))}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add to cart</a>
                      }

                  </div>
              </div>
            </div>
          ))
        }
      </div>


      <Footer />
    </main>
  )
}
