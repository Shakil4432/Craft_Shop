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

  const handleSort = sortId => {
    let sortedItems = [...items];
    if (sortId === 'yes') {
      sortedItems.sort((a, b) => b.customize.localeCompare(a.customize));
    } else if (sortId === 'No') {
      sortedItems.sort((a, b) => a.customize.localeCompare(b.customize));
    }
    setItems(sortedItems);
  };
  
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




  return (
    <div className='mt-16'>
      <h2 className='text-4xl font-bold mb-10 text-center'>My Jute And Wooden Craft Items</h2>
      <select
        name="subcategoryname"
        id="brand"
        className="p-2 mb-5 ml-3 border rounded-md "
        type="text"
        placeholder="Select Brand"
        onClick={(e)=>handleSort(e.target.value)}
      >
        <option value="Sort By Customization" disabled>
          Sort By Customization
        </option>
        <option  value="yes" >
          Yes
        </option>
        <option  value="No" >
         No
        </option>
      
      </select>
      <div className='flex justify-center items-center gap-6 flex-wrap'>
        {
          items.map(itemCard => <MyCard key={itemCard._id} handleDelete={handleDelete} itemCard={itemCard}></MyCard>)
        }
      </div>
    </div>
  )
}
