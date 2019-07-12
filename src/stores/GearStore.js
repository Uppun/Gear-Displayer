import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import fullItemData from '../assets/items.json';

class GearStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return null;
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.INITIALIZE: {
                const {itemBuild, materia, job} = action;
                const icons = {};

                for (const item in itemBuild) {
                    icons[item] = fullItemData.data[parseInt(itemBuild[item].itemID) + 1].Icon;
                }

                return {
                    itemBuild,
                    materia,
                    job,
                    icons, 
                }
            }

            default: {
                return state;
            }
        }
    }
}

export default new GearStore();