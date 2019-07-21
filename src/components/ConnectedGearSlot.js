import React from 'react';
import GearStore from '../stores/GearStore';
import GearSlot from './GearSlot';
import useFluxStore from 'flux-hooks';

const ConnectedGearSlot = ({slot, onClick}) => {
    const {itemBuild, materia, icons} = useFluxStore(GearStore, (prevState, store) => store.getState());
    const item = itemBuild[slot];

    if (!item) {
        return null;
    }
    
    return (
        <GearSlot item={item} icon={icons[slot]} materia={materia[`${slot}-${item.itemID}`]} onClick={onClick} slot={slot} />
    )
}

export default ConnectedGearSlot;
