import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryCard({ item }) {
    const { _id, category, imgURL } = item;
    return (
        <div >
            <div className='w-80 h-[55vh]' >
                <ul className="flex flex-col shadow-md gap-4 p-6 justify-between">
                    <img className="object-cover w-full h-52 dark:border- rounded outline-none " src={imgURL} />
                    <div >
                        <h1 className=' font-semibold text-center'>{category}</h1>
                    </div>
                    <Link to="/categoriesitem" className=' btn btn-success text-white'>View Items</Link>
                </ul>
            </div>
        </div>
    )
}
