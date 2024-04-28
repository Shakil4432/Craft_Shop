import React from 'react'
import { Link } from 'react-router-dom'

export default function MyCard({ itemCard }) {
    const { _id, itemName, price, rating, imgURL, stock } = itemCard
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imgURL} className='w-full h-[35vh]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p><span className='font-bold'>PRICE </span>: {price}TK</p>
                    <p><span className='font-bold'>RATING </span>: {rating}</p>
                    <p><span className='font-bold'>STOCK </span>: {stock}</p>

                    <div className='flex justify-between items-center '>
                        <div>
                            <div className="card-actions justify-start">
                                <Link to={`/viewdetails/${_id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <div className="card-actions justify-end">
                                <Link  className="btn btn-accent btn-circle text-white">Update</Link>
                            </div>
                            <div className="card-actions justify-end">
                                <Link  className="btn btn-error btn-circle text-white">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
