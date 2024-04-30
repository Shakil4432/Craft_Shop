import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';


export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://jute-and-wooden-craft-server-steel.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
  return (
    <div className='mt-16'>
        <h2 className='text-4xl font-bold border-b-2 w-44 border-gray-800'>Categories</h2>
        <div className='flex justify-center items-center flex-wrap gap-6 mt-10'>
            {
                categories.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
            }
        </div>
    </div>
  )
}
