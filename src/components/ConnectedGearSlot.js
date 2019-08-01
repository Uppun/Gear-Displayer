import React from 'react';
import GearStore from '../stores/GearStore';
import GearSlot from './GearSlot';
import EmptySlot from './EmptySlot';
import useFluxStore from 'flux-hooks';
import '../assets/gearcard.css'
import materiaMap from '../assets/materiaMap';
import materiaIconsMap from '../assets/materiaIconsMap';

const ConnectedGearSlot = ({slot, onClick}) => {
    const {itemBuild, materia, icons} = useFluxStore(GearStore, (prevState, store) => store.getState());
    const item = itemBuild[slot];

    let gearSlot;
    let slottedMateria;

    if (!item) {
        gearSlot = (slot !== 'ringRight' && slot !== 'ringLeft') ? <EmptySlot slot={slot}/> : gearSlot = <EmptySlot slot={'ring'}/>;
        slottedMateria = [];    
    } else {
        gearSlot = <GearSlot item={item} icon={icons[slot]} onClick={onClick} slot={slot} />;
        slottedMateria = materia[`${slot}-${item.itemID}`]; ;
    }
    
    return (
        <div className='connected-gear-slot'>
            <div className='materia'>
                {slottedMateria ? slottedMateria.map((materia, index) => {
                    const splitMateria = materia.split(':');
                    const materiaNumber = parseInt(splitMateria[1], 10);
                    const materiaIcon = materiaIconsMap.get(splitMateria[0])[materiaNumber];
                    const materiaIconLink = `https://xivapi.com/i/020000/${materiaIcon}.png`
                    return (
                        <div className='materia-entry' key={index}>
                            {materiaMap.get(splitMateria[0]) + ' ' + (materiaNumber + 1)}
                            <img 
                                src={materiaIconLink}
                                alt='icon'
                                className='materia-icon'
                            />
                        </div>
                    )
                }) : null}
            </div>
            {gearSlot}
        </div>
    )
}

export default ConnectedGearSlot;
