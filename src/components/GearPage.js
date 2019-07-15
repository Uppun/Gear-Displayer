import React from 'react';
import GearStore from '../stores/GearStore';
import Middleware from '../Middleware';
import ConnectedGearSlot from './ConnectedGearSlot';
import '../assets/gearpage.css'
import useFluxStore from 'flux-hooks';

const GearPage = () => {
    const {itemBuild, job} = useFluxStore(GearStore, (prevState, store) => store.getState());

    if (itemBuild == null) {
        Middleware(); 
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div>   
            <div>
                {job}
            </div>
            <div className='gear-container'>
                <div className='left-side'>
                    <ConnectedGearSlot slot='mainhand' />
                    <ConnectedGearSlot slot='head' />
                    <ConnectedGearSlot slot='hands' />
                    <ConnectedGearSlot slot='chest' />
                    <ConnectedGearSlot slot='waist' />
                    <ConnectedGearSlot slot='legs' />
                    <ConnectedGearSlot slot='feet' />
                </div>
                <div className='right-side'>
                    <ConnectedGearSlot slot='offhand' />
                    <ConnectedGearSlot slot='ears' />
                    <ConnectedGearSlot slot='neck' />
                    <ConnectedGearSlot slot='wrist' />
                    <ConnectedGearSlot slot='ringRight' />
                    <ConnectedGearSlot slot='ringLeft' />
                    <ConnectedGearSlot slot='food' />
                </div>
            </div>
        </div>
    )
}

export default GearPage;