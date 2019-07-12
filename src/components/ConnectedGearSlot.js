import React, {Component} from 'react';
import GearStore from '../stores/GearStore';
import {Container} from 'flux/utils';
import GearSlot from './GearSlot';

class ConnectedGearSlot extends Component {

    static getStores() {
        return [GearStore];
    }

    static calculateState(prevState) {
        return {
            ...GearStore.getState(),
        };
    }

    render() {

        const {slot} = this.props;
        const {itemBuild, materia, icons} = this.state;
        console.log(itemBuild)
        console.log(slot)
        console.log(itemBuild[slot])
        const item = itemBuild[slot];

        return (
            <GearSlot item={item} icon={icons[slot]} materia={materia[`${slot}-${item.itemID}`]} />
        )
    }
}

export default Container.create(ConnectedGearSlot);
