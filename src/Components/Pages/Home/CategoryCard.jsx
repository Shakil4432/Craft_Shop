import React from 'react'

export default function CategoryCard({ item }) {
    const { _id, category, imgURL } = item;
    return (
        <div >
            <div >
                <ul className="flex flex-col shadow-md gap-4 p-6 justify-between">
                    <img className="object-cover w-52 h-52 dark:border- rounded outline-none " src={imgURL} />
                    <div >
                        <h1 className=' font-semibold text-center'>{category}</h1>
                    </div>
                </ul>
            </div>
        </div>
    )
}
