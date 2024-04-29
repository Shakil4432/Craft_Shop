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
import { useLoaderData } from 'react-router-dom';

export default function UpdateItem() {
    const { user } = useContext(AuthContext);
    const item = useLoaderData();
   
    const { _id, itemName, price, subCategoryName, rating, imgURL, processTime, customize, stock } = item;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const itemName = form.itemname.value;
        const price = form.price.value;
        const subCategoryName = form.subcategoryname.value;
        const rating = form.rating.value;
        const imgURL = form.imgurl.value;
        const processTime = form.processtime.value;
        const customize = form.customize.value;
        const stock = form.stock.value;

        const updateitem = { itemName, price, subCategoryName, rating, imgURL, processTime, customize, stock }


        fetch(`http://localhost:5000/JuteAndWoodenCraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateitem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
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

                            <CiTempHigh></CiTempHigh>
                            <input type="text" className="grow" placeholder="Item Name" name="itemname" defaultValue={itemName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <IoIosPricetag></IoIosPricetag>
                            <input type="text" className="grow" placeholder="Price" name="price" defaultValue={price} />
                        </label>
                    </div>
                    <div className='space-y-4'>

                        <label className="input input-bordered flex items-center gap-2">
                            <BiSolidCategory></BiSolidCategory>
                            <input type="text" className="grow" placeholder="SubcategoryName" name="subcategoryname" defaultValue={subCategoryName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Rating" name="rating" defaultValue={rating} />
                        </label>
                    </div>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <CiLink></CiLink>
                            <input type="url" className="grow" placeholder="Img URL" name="imgurl" defaultValue={imgURL} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <CiTimer></CiTimer>
                            <input type="text" className="grow" placeholder="Processing Time" name="processtime" defaultValue={processTime} />
                        </label>

                    </div>
                    <div className='space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <BiCustomize></BiCustomize>
                            <input type="text" className="grow" placeholder="Customization" name="customize" defaultValue={customize} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 col-span-2">
                            <AiOutlineStock></AiOutlineStock>
                            <input type="text" className="grow" placeholder="Stock Status" name="stock" defaultValue={stock} />
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
