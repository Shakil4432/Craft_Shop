import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CraftDetails() {
    const items = useLoaderData();
    const {name,_id, email, itemName, price, subCategoryName, rating, imgURL, processTime, customize, stock, description} = items;
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 ">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={imgURL} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{itemName}</a>
                        </div>
                        <div className="">
                            <p><span className='text-lg font-bold'>Product ID : </span>{_id}</p>
                            <p><span className='text-lg font-bold'>Description : </span>{description}</p>
                            <p><span className='text-lg font-bold'>Process Time : </span>{processTime}</p>
                            <p><span className='text-lg font-bold'>Stock : </span>{stock}</p>
                            <p><span className='text-lg font-bold'>Sub Category : </span>{subCategoryName} </p>
                            <p><span className='text-lg font-bold'>Price : </span>{price}TK </p>
                            <p><span className='text-lg font-bold'>Rating : </span>{rating} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
