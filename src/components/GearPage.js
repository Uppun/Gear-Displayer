import React from 'react';
import GearStore from '../stores/GearStore';
import Middleware from '../Middleware';
import ConnectedGearSlot from './ConnectedGearSlot';
import '../assets/gearpage.css'
import useFluxStore from 'flux-hooks';
import GearModal from './GearModal';
import Landing from './Landing';
import GearSetActions from '../actions/GearSetActions';
import NavBar from './NavBar';

const onGearSlotClick = (slot) => {
    GearSetActions.openModal(slot);
}

const GearPage = ({buildId}) => {
    const {itemBuild} = useFluxStore(GearStore, (prevState, store) => store.getState());

    if (itemBuild == null) {
        Middleware(buildId); 
        return(
            <div className='loading-page'>
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
            <NavBar id={buildId} />
            <div className='gear-page-content'>
                <div className='gear-container'>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='mainhand' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='offhand' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='head' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ears' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='hands' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='neck' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='chest' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='wrist' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='waist' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ringRight' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='legs' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='ringLeft' onClick={onGearSlotClick} />
                    </div>
                    <div className='gear-row'>
                        <ConnectedGearSlot slot='feet' onClick={onGearSlotClick} />
                        <ConnectedGearSlot slot='food' onClick={onGearSlotClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearPage;