import React from 'react';
import GearStore from '../stores/GearStore';
import useFluxStore from 'flux-hooks';
import ModalWindow from './ModalWindow';
import '../assets/modal.css'
import GearSetActions from '../actions/GearSetActions';

const GearModal = () => {
    const {itemBuild, materia, icons, modalSlot} = useFluxStore(GearStore, (prevState, store) => store.getState());

    if (!modalSlot) {
        return null;
    }

    const item = itemBuild[modalSlot];

    return (
        <div className='gear-modal'>
            <ModalWindow item={item} icon={icons[modalSlot]} materia={materia[`${modalSlot}-${item.itemID}`]} slot={modalSlot} />
            <div className='modal-background' onClick={() => GearSetActions.closeModal()}/>
        </div>
    )
}


export default GearModal;