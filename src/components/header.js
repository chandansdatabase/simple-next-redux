import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkStorage } from '../storage/cartSlice'

export default function Header() {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log('aaa')
        dispatch(checkStorage());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Hi
                <code className="font-mono font-bold">&nbsp;All,</code>
            </p>
            {
                cart.length > 0 ?
                    <div>
                        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                            <button dataDrawerTarget="cart-drawer" dataDrawerShow="cart-drawer" ariaControls="cart-drawer" role="button" className="relative flex">
                                <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cart.length}
                                </span>
                            </button>
                        </li>
                    </div>
                    :
                    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="#"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <Image
                                src="/logo.png"
                                alt="My Logo"
                                className="dark:invert rounded-xl"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
            }

        </div>
    )
}