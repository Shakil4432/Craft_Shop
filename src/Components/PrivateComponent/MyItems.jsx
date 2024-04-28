import React, { useContext} from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyCard from './MyCard';

export default function MyItems() {
 
  const {user} = useContext(AuthContext);
  const allCards = useLoaderData();
  const allItems = allCards.filter(card => card.email === user.email);
  
  return (
    <div className='mt-16'>
      <h2 className='text-4xl font-bold mb-10 text-center'>My Jute And Wooden Craft Items</h2>
      <div className='flex justify-center items-center gap-6 flex-wrap'>
        {
          allItems.map(itemCard=> <MyCard key={itemCard._id} itemCard={itemCard}></MyCard>)
        }
      </div>
    </div>
  )
}
