import React, { useContext } from 'react'
import { CiTempHigh } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { CiLink } from "react-icons/ci";
import { BiCustomize } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

export default function UpdateItem() {
    const {user} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const itemName = form.itemname.value;
        const price = form.price.value;
        const subCategoryName = form.subcategoryname.value;
        const rating = form.rating.value;
        const imgURL = form.imgurl.value;
        const processTime = form.processtime.value;
        const customize = form.customize.value;
        const stock = form.stock.value;
        const description = form.description.value;
        const item = { name, email, itemName, price, subCategoryName, rating, imgURL, processTime, customize, stock, description }
    
        fetch("http://localhost:5000/JuteAndWoodenCraft", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(item)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
      }
    
    return (
        <div className='mt-20'>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold text-center'>Add Jute And Wooden Item</h1>
            </div>
            <div className='bg-gray-50 p-10 rounded-md'>
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4 '>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="User Email" defaultValue={user?.email || 'Email Not Found'} name="email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">

                            <CiTempHigh></CiTempHigh>
                            <input type="text" className="grow" placeholder="Item Name" name="itemname" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <IoIosPricetag></IoIosPricetag>
                            <input type="text" className="grow" placeholder="Price" name="price" />
                        </label>
                    </div>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="User Name" name="name" defaultValue={user?.displayName || "Name Not Found"} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <BiSolidCategory></BiSolidCategory>
                            <input type="text" className="grow" placeholder="SubcategoryName" name="subcategoryname" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Rating" name="rating" />
                        </label>
                    </div>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <CiLink></CiLink>
                            <input type="url" className="grow" placeholder="Img URL" name="imgurl" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <CiTimer></CiTimer>
                            <input type="text" className="grow" placeholder="Processing Time" name="processtime" />
                        </label>

                    </div>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <BiCustomize></BiCustomize>
                            <input type="text" className="grow" placeholder="Customization" name="customize" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 col-span-2">
                            <AiOutlineStock></AiOutlineStock>
                            <input type="text" className="grow" placeholder="Stock Status" name="stock" />
                        </label>
                    </div>
                    <div className='col-span-2'>
                        <label className="input input-bordered flex items-center gap-2 col-span-2">
                            <MdOutlineDescription></MdOutlineDescription>
                            <input type="text" className="grow" placeholder="Short Description" name="description" />
                        </label>
                    </div>
                    <div className='col-span-2'>
                        <input type="submit" value="Update Item" className='btn btn-block bg-black text-white' />
                    </div>
                </form>
            </div>
        </div>
    )
}
