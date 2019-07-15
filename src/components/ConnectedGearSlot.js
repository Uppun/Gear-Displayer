import React from 'react';
import GearStore from '../stores/GearStore';
import GearSlot from './GearSlot';
import useFluxStore from 'flux-hooks';

const ConnectedGearSlot = ({slot}) => {
    const {itemBuild, materia, icons} = useFluxStore(GearStore, (prevState, store) => store.getState());
    const item = itemBuild[slot];
    return (
        <GearSlot item={item} icon={icons[slot]} materia={materia[`${slot}-${item.itemID}`]} />
    )
}

export default ConnectedGearSlot;
