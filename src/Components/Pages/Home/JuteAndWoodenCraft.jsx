import React, { useEffect, useState } from 'react'
import JuteAndWoodenCraftCard from './JuteAndWoodenCraftCard';

export default function JuteAndWoodenCraft() {
    const [craftCards, setCraftCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/JuteAndWoodenCraft')
            .then(res => res.json())
            .then(data => setCraftCards(data))
    }, [])
    return (
        <div className='mt-16'>
            <h1 className='text-4xl font-bold text-center'>Craft Items</h1>
            <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
                {
                    craftCards.slice(0, 6).map(craftCard => <JuteAndWoodenCraftCard key={craftCard._id} craftCard={craftCard}></JuteAndWoodenCraftCard>)
                }
            </div>
        </div>
    )
}
