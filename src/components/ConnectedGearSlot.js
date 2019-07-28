import React from 'react';
import GearStore from '../stores/GearStore';
import GearSlot from './GearSlot';
import EmptySlot from './EmptySlot';
import useFluxStore from 'flux-hooks';

const ConnectedGearSlot = ({slot, onClick}) => {
    const {itemBuild, materia, icons} = useFluxStore(GearStore, (prevState, store) => store.getState());
    const item = itemBuild[slot];

    if (!item) {
        if (slot !== 'ringRight' && slot !== 'ringLeft') {
            return <EmptySlot slot={slot}/>;
        }
        return <EmptySlot slot={'ring'}/>;
    }
    
    return (
        <GearSlot item={item} icon={icons[slot]} materia={materia[`${slot}-${item.itemID}`]} onClick={onClick} slot={slot} />
    )
}

export default ConnectedGearSlot;
