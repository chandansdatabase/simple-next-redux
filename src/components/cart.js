
import { useSelector, useDispatch } from 'react-redux'
import { remove, quantityManage } from '../storage/cartSlice'
import Image from 'next/image'
import find from 'lodash/find'
import sumBy from 'lodash/sumBy'

export default function Cart({ modalManage, modalShow }) {

    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`${modalShow ? '' : 'translate-x-full'} fixed top-0 inset-0 z-40 bg-gray-500 bg-opacity-75 w-full transition-transform duration-700`}></div>
            <div id="cart-drawer" className={`${modalShow ? '' : 'translate-x-full'} fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform duration-700 ease-in-out bg-white dark:bg-gray-800`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full overflow-hidden">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => modalManage(false)}>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        {
                                            cart.length === 0 ?
                                                <div className='flex flex-col items-center justify-center h-full'>
                                                    <h1 className="text-xl font-bold">Empty Cart :(</h1>
                                                    <h3 className="text-sm">Keep Shopping :) </h3>
                                                </div>
                                                :
                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {
                                                                cart.map((p, key) => (
                                                                    <li key={key} className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            {
                                                                                p.productImage?.length > 0 ?
                                                                                    <Image
                                                                                        className="object-cover rounded-t-lg h-24 w-full"
                                                                                        src={p.productImage[0].imageUrl}
                                                                                        alt="product image"
                                                                                        width={200}
                                                                                        height={100}
                                                                                        priority
                                                                                    />
                                                                                    :
                                                                                    <Image
                                                                                        className="p-8 rounded-t-lg"
                                                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR6Ap_L-a5EsSeDCIPggUn1Tz-j0jI2tBvKITwqMfRv5tZuzCs3tT-QXnwgzz4h6Iq_k&usqp=CAU"
                                                                                        alt="product image"
                                                                                        width={400}
                                                                                        height={400}
                                                                                        priority
                                                                                    />
                                                                            }
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">{p.productName}</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">₹<del className="text-red-400 text-sm font-bold">{Number(Number(p.costPrice) * Number(p.quantity))}</del> {Number(Number(p.sellPrice) * Number(p.quantity))}</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">{p.weight} {p.weightSymbol}</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <p className="text-gray-500">Qty </p>
                                                                                <div className="flex items-center border-gray-100">
                                                                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { find(cart, ['id', p.id]).quantity === 1 ? dispatch(remove(p.id)) : dispatch(quantityManage({ id: p.id, quantity: find(cart, ['id', p.id]).quantity - 1 })) }}> - </span>
                                                                                    <span className='bg-slate-50 text-center text-xs outline-none py-1.5 px-3'>{p.quantity}</span>
                                                                                    {/* <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={find(cart, ['id', p.id]).quantity} min="1" readOnly={true} /> */}
                                                                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => dispatch(quantityManage({ id: p.id, quantity: find(cart, ['id', p.id]).quantity + 1 }))}> + </span>
                                                                                </div>
                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => dispatch(remove(p.id))}>Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    {
                                        cart.length > 0 ?
                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>₹ <del className="text-red-400 text-sm font-bold">{sumBy(cart, function (o) { return Number(Number(o.costPrice) * Number(o.quantity)); })}</del> {sumBy(cart, function (o) { return Number(Number(o.sellPrice) * Number(o.quantity)); })}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <button onClick={() => { alert('Jao Jake Dukaan se kharid lo :p') }} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or
                                                        <br />
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => modalManage(false)}>
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <div className="border-t text-center border-gray-200 px-4 py-6 sm:px-6">
                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => modalManage(false)}>
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}