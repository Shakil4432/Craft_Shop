import React from 'react'
import { Link } from 'react-router-dom'
import { TbHttpDelete } from "react-icons/tb";


export default function MyCard({ itemCard, handleDelete}) {
    const { _id, itemName, price, rating, imgURL, stock } = itemCard

   

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
                <figure><img src={imgURL} className='w-full h-[35vh]' /></figure>
                <div className="card-body ">
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
                                <Link to={`/updateitem/${_id}`}  className="btn btn-accent  text-white">Update</Link>
                            </div>
                            <div className="card-actions absolute top-[-5%] right-[-5%] text-red-400 ">
                                <Link onClick={() => handleDelete(_id)} className="btn btn-error btn-circle text-3xl"><TbHttpDelete></TbHttpDelete></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
