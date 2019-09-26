import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import iconData from '../assets/items.json';

const statOrdering = [
    'PDMG',
    'MDMG',
    'WPN',
    'DLY',
    'DEF',
    'MDEF',
    'BLKR',
    'BLKS',
];

class GearStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            modalSlot: null,
        };
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.INITIALIZE: {
                const {itemBuild, materia, job} = action;
                const icons = {};

                
                for (const item in itemBuild) {
                    icons[item] = iconData[parseInt(itemBuild[item].itemID, 10)];
                    const stats = itemBuild[item].category === 'crafted' && itemBuild[item].HQ ? itemBuild[item].statsHQ : itemBuild[item].statsNQ;

                    itemBuild[item].mainStatLine = [];
                
                    for (const stat of statOrdering) {
                        if (stats[stat]) {
                            const obj = {};
                            obj[stat] = stats[stat];
                            itemBuild[item].mainStatLine.push(obj);
                            delete stats[stat];
                        }
                    }

                    itemBuild[item].stats = stats; 
                }

                return {
                    ...state,
                    itemBuild,
                    materia,
                    job,
                    icons, 
                }
            }

            case ActionTypes.OPENMODAL: {
                const {modalSlot} = action;

                return {
                    ...state,
                    modalSlot,
                }
            }

            case ActionTypes.CLOSEMODAL: {
                return {
                    ...state,
                    modalSlot: null,
                }
            }

            case ActionTypes.NOTFOUND: {
                return {
                    itemBuild: '404 not found',
                }
            }

            default: {
                return state;
            }
        }
    }
}

export default new GearStore();