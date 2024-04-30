import React from 'react'
import { Link } from 'react-router-dom'

export default function JuteAndWoodenCraftCard({ craftCard }) {
    const {name,_id, email, itemName, price, subCategoryName, rating, imgURL, processTime, customize, stock, description } = craftCard
   
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imgURL} className='w-full h-[35vh]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p><span className='font-bold'>PRICE </span>: {price}TK</p>
                    <p><span className='font-bold'>RATING </span>: {rating}</p>
                    <p><span className='font-bold'>STOCK </span>: {stock}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewdetails/${_id}`} className="btn btn-success text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
