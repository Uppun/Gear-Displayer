import React from 'react';
import '../assets/gearcard.css'

const GearSlot = ({item, materia, icon, onClick, slot}) => {
    let iconNumber = '000000' + icon;
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`
    console.log(slot)

    return (
        <div className='gear-card' onClick={() => onClick(slot)}>
            <img
                src={iconUrl}
                alt='icon' 
            />
            {item.name.en}
            {materia}
        </div>
    )

}

export default GearSlot;