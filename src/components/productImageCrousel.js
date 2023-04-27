import Image from 'next/image'
import {useEffect, useState} from 'react'

function ProductImageCrousel({ imgA }) {
    const [order, ChangeOrder] = useState(0);
    // const [intervals, ChangeIntervals] = useState([]);
    useEffect(()=>{
        // intervals.map((i)=>{
        //     clearInterval(i);
        // })

        // const x = setInterval(()=>{
        //     ChangeOrder(imgA.length === order+1? 0:order+1)
        // },5000)
        // ChangeIntervals(intervals.push(x));
    },[])

    return (
        <div id="default-carousel" className="relative w-64" data-carousel="slide">
            <div className="relative overflow-hidden">
                {
                    imgA.map((p, key) => (
                        <div key={key} className={`${order === key? '': 'hidden'} transition duration-700 ease-in-out`} data-carousel-item>
                            <Image
                                className="object-cover rounded-t-lg h-64 w-full block"
                                src={p.imageUrl}
                                alt="product image"
                                width={200}
                                height={100}
                                priority
                            />
                        </div>
                    ))
                }
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {
                    imgA.map((p, key) => (
                        <button key={key} type="button" className={`w-3 h-3 rounded-full ${order === key?'bg-slate-400':'bg-slate-200'}`} aria-current={order === key} aria-label="Slide 1" data-carousel-slide-to={key} onClick={()=> ChangeOrder(key)}></button>
                    ))}
                {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
            </div>
            {
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={()=>{ChangeOrder(order === 0? imgA.length-1:order-1)}}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            }
            {
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={()=>{ChangeOrder(order+1 === imgA.length?0:order+1)}}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            }
        </div>
    )
}

export default ProductImageCrousel