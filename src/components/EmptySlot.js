import React from 'react';
import '../assets/gearcard.css'


const EmptySlot = ({slot}) => {
    const emptyString = `Empty ${slot}`;
    const emptyIcon = slot === 'food' ? `https://xivapi.com/img-misc/gear/pack.png` : `https://xivapi.com/img-misc/gear/${slot}.png`;
    return (
        <div className='empty-gear-card'>
            <div className='icon-and-name'>
                <img 
                    src={emptyIcon}
                    alt='icon'
                    className='empty-icon'
                />
                <div className='item-name'>
                    {emptyString}
                </div>
            </div>
        </div>
    )

}

export default EmptySlot;