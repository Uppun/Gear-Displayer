import React from 'react';
import '../assets/gearcard.css';
import {useSpring, animated} from 'react-spring';

const GearSlot = ({item, icon, onClick, slot}) => {
    let iconNumber = '000000' + icon;
    console.log(iconNumber);
    console.log(icon);
    iconNumber = iconNumber.substr(iconNumber.length-6);
    const iconSection = iconNumber.replace(/\d{3}$/, '000');
    const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`;

    const [props, set] = useSpring(() => ({boxShadow: '0px 0px 0px black', transform: 'translate(0px, 0px)'}));

    return (
        <animated.div 
            className='gear-card' 
            onClick={() => onClick(slot)}
            onMouseEnter={() => set({boxShadow: '4px 4px 4px black', transform: 'translate(-4px, -4px)'})}
            onMouseLeave={() => set({boxShadow: '0px 0px 0px black', transform: 'translate(0px, 0px)'})}
            style={props}>
            <div className='icon-and-name'>
                <img 
                    src={iconUrl}
                    alt='icon'
                    className='gear-card-icon'
                />
                <div className='item-name'>
                    {item.name.en}
                </div>
            </div>
        </animated.div>
    )

}

export default GearSlot;