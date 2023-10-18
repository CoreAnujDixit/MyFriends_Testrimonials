import React from 'react'
import './Card.css'
import { FaQuoteRight, FaQuoteLeft, FaGreaterThan, FaLessThan } from 'react-icons/fa'


const Card = (props) => {
    let review = props.review
    return (

        <div className='bg-red-200 w-screen h-screen justify-center flex flex-col flex-wrap items-center gap-3 '>
            <div className='text-2xl font-bold'>
                <h1>Our Testimonials</h1>
            </div>
            <div>
                <img src={review.image} alt="" className='rounded-full w-52 relative border-4 z-20 hover:shadow-md  ease-out duration-300 hover:shadow-violet-700	hover:scale-105' />
            </div>
            <div className='w-20 h-20 rounded-full bg-blue-300 absolute top-12 left-60 '>

            </div>
            <div className='text-xl font-extrabold uppercase'>
                <p>{review.name}</p>
            </div>
            <div className=' font-bold'>
                <p>{review.job}</p>
            </div>

            <div>
                <FaQuoteLeft />

            </div>
            <div className='w-fit anuj font-bold hover:text-blue-900 hover:font-extrabold ease-in duration-200 '>
                <p>{review.text}</p>

            </div>
            <div>
                <FaQuoteRight />
            </div>
            <div className=' space-x-8 text-xl'>
                <button><FaLessThan /></button>
                <button>
                    <FaGreaterThan />
                </button>
            </div>

            <div><button class="btn">
                <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                    <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>

                <span class="text">Surprise me</span>
            </button></div>
        </div>
    )
}

export default Card;