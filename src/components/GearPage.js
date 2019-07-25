import React from 'react';
import GearStore from '../stores/GearStore';
import Middleware from '../Middleware';
import ConnectedGearSlot from './ConnectedGearSlot';
import '../assets/gearpage.css'
import useFluxStore from 'flux-hooks';
import GearModal from './GearModal';
import Landing from './Landing';
import GearSetActions from '../actions/GearSetActions';

const onGearSlotClick = (slot) => {
    GearSetActions.openModal(slot);
}

const GearPage = ({buildId}) => {
    const {itemBuild, job} = useFluxStore(GearStore, (prevState, store) => store.getState());

    if (itemBuild == null) {
        Middleware(buildId); 
        return(
            <div>
                Loading...
            </div>
        )
    }

    if (itemBuild === '404 not found') {
        return (
            <Landing missingPage={true} />
        )
    }

    return(
        <div className='gear-page'>
            <GearModal />
            <div className='gear-page-content'>
                <div>
                    {job}
                </div>
                <div className='gear-container'>
                    <div className='left-side'>
                        <ConnectedGearSlot slot='mainhand' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='head' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='hands' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='chest' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='waist' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='legs' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='feet' onClick={onGearSlotClick} />
                    </div>
                    <div className='right-side'>
                        <ConnectedGearSlot slot='offhand' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ears' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='neck' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='wrist' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ringRight' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ringLeft' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='food' onClick={onGearSlotClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearPage;