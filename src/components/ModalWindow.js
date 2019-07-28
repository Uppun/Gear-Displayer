import React from 'react';
import '../assets/modal.css';
import materiaMap from '../assets/materiaMap';
import nameMap from '../assets/nameMap';

const ModalWindow = ({item, materia, icon, slot}) => {

    let iconNumber = '000000' + icon;
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`;

    console.log(item)
    const stats = item.category === 'crafted' && item.HQ ? item.statsHQ : item.statsNQ;
    console.log(stats)

    return (
        <div className='modal-window'>
            <div className='modal-top'>
                <div className='icon-and-name'>
                    <img
                        className='gear-icon'
                        src={iconUrl}
                        alt='icon' 
                    />
                    <div className='item-name'>
                        {item.name.en}
                    </div>
                </div>
            </div>
            <div className='modal-bottom'>
                <div className='stats'>
                    {Object.entries(stats).map(([key, value], index) => {
                        if (key === 'DLY') {
                            value = value/1000
                        }
                        return (slot !== 'food' ?
                            <div className='stat-entry' key={index}>
                                {`${nameMap.get(key)}: ${value}`}
                            </div>
                            :
                            <div className='stat-entry' key={index}>
                                {`${nameMap.get(key)} +${value.Percent}% (Max: ${value.Max})`}
                            </div>
                    )})}
                </div>
                <div className='materia'>
                    {materia ? materia.map((materia, index) => {
                        const splitMateria = materia.split(':');
                        return (
                            <div className='materia-entry' key={index}>
                                {materiaMap.get(splitMateria[0]) + ' ' + (parseInt(splitMateria[1], 10) + 1)}
                            </div>
                        )}) : null}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;