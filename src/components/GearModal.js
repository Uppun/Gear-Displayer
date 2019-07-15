import React from 'react';
import GearStore from '../stores/GearStore';
import useFluxStore from 'flux-hooks';

const GearModal = ({slot}) => {
    const {itemBuild, materia, icons} = useFluxStore(GearStore, (prevState, store) => store.getState());
    return (
        <div className='gearModal'>
        </div>
    )
}


export default GearModal;