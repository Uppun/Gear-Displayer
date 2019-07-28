import React from 'react';
import '../assets/gearcard.css'
import materiaMap from '../assets/materiaMap';

const GearSlot = ({item, materia, icon, onClick, slot}) => {
    let iconNumber = '000000' + icon;
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`;

    return (
        <div className='gear-card' onClick={() => onClick(slot)}>
            <div className='icon-and-name'>
                <img 
                    src={iconUrl}
                    alt='icon'
                    className='gear-icon'
                />
                <div className='item-name'>
                    {item.name.en}
                </div>
            </div>
            <div className='materia'>
                {materia ? materia.map((materia, index) => {
                    const splitMateria = materia.split(':');
                    return (
                        <div className='materia-entry' key={index}>
                            {materiaMap.get(splitMateria[0]) + ' ' + (parseInt(splitMateria[1], 10) + 1)}
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )

}

export default GearSlot;