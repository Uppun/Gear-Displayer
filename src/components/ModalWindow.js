import React from 'react';
import '../assets/modal.css';
import materiaMap from '../assets/materiaMap';
import nameMap from '../assets/nameMap';
import materiaIconsMap from '../assets/materiaIconsMap';

const ModalWindow = ({item, materia, icon, slot}) => {

    let iconNumber = '000000' + icon;
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`;

    const {stats, mainStatLine} = item;

    return (
        <div className='modal-window'>
            <div className='modal-top'>
                <div className='modal-icon-and-name'>
                    <img
                        className='modal-gear-icon'
                        src={iconUrl}
                        alt='icon' 
                    />
                    <div className='modal-item-name'>
                        {item.name.en}
                    </div>
                </div>
            </div>
            <div className='modal-bottom'>
                <div className='main-stat-line'>
                    {mainStatLine.map((stat, index) => {
                            const key = Object.keys(stat)[0];
                            let value = stat[Object.keys(stat)[0]];
                            if (key === 'DLY') {
                                    value = value/1000
                            }
                            return (key !== 'PDMG' && key !== 'MDMG') ? <div className='main-stat'>{`${nameMap.get(key)}: ${value}`}</div> : null;    
                    })}
                </div>
                <div className='stats'>
                    {Object.entries(stats).map(([key, value], index) => {
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
                <div className='modal-materia'>
                    {materia ? materia.map((materia, index) => {
                        const splitMateria = materia.split(':');
                        const materiaNumber = parseInt(splitMateria[1], 10);
                        const materiaIcon = materiaIconsMap.get(splitMateria[0])[materiaNumber];
                        const materiaIconLink = `https://xivapi.com/i/020000/${materiaIcon}.png`
                        return (
                            <div className='materia-entry' key={index}>
                                <img 
                                    src={materiaIconLink}
                                    alt='icon'
                                    className='materia-icon'
                                />
                                {materiaMap.get(splitMateria[0]) + ' ' + (materiaNumber + 1)}
                            </div>
                        )}) : null}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;