import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyCard from './MyCard';
import Swal from 'sweetalert2';

export default function MyItems() {

  const { user } = useContext(AuthContext);
  const allCards = useLoaderData();
  const allItems = allCards.filter(card => card.email === user.email);
  const [items, setItems] = useState(allItems);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/JuteAndWoodenCraft/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remainingItems = items.filter(item => item._id !== id)
              setItems(remainingItems)
            }
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  const handleUpdate = (id) => {
    console.log(id)
}


  return (
    <div className='mt-16'>
      <h2 className='text-4xl font-bold mb-10 text-center'>My Jute And Wooden Craft Items</h2>
      <div className='flex justify-center items-center gap-6 flex-wrap'>
        {
          items.map(itemCard => <MyCard key={itemCard._id} handleDelete={handleDelete} handleUpdate={handleUpdate} itemCard={itemCard}></MyCard>)
        }
      </div>
    </div>
  )
}
