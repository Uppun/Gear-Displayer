import React from 'react';
import '../assets/gearcard.css'


const EmptySlot = ({slot}) => {
    return (
        <div className='gear-card'>
            Empty {slot}
        </div>
    )

}

export default EmptySlot;