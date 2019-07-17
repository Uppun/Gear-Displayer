import React from 'react';
import '../assets/modal.css'

const ModalWindow = ({item, materia, icon}) => {

    let iconNumber = '000000' + icon;
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`

    return (
        <div className='modal-window'>
            <img
                src={iconUrl}
                alt='icon' 
            />
            {item.name.en}
            {materia}
        </div>
    )
}

export default ModalWindow;