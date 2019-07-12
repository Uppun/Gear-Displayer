import React, {Component} from 'react';
import '../assets/gearcard.css'

export default class GearSlot extends Component {
    render() {
        const {item, materia, icon} = this.props;
        
        let iconNumber = '000000' + icon;
        iconNumber = iconNumber.substr(iconNumber.length-6);
        const iconSection = iconNumber.replace(/\d{3}$/, '000');
        const iconUrl = `https://xivapi.com/i/${iconSection}/${iconNumber}.png`

        return (
            <div className='gear-card'>
                <img
                    src={iconUrl}
                    alt='icon' 
                />
                {item.name.en}
                {materia}
            </div>
        )
    }
}