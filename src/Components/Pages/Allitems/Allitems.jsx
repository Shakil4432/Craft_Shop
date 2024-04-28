import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ItemCard from './ItemCard';

export default function Allitems() {
    const items = useLoaderData();
  return (
    <div className='mt-16'>
         <div className='flex items-center justify-center gap-6 flex-wrap'>
            {
                items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
            }
         </div>
    </div>
  )
}
