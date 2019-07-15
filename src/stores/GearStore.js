import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import iconData from '../assets/items.json';

class GearStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.INITIALIZE: {
                const {itemBuild, materia, job} = action;
                const icons = {};

                for (const item in itemBuild) {
                    icons[item] = iconData[parseInt(itemBuild[item].itemID, 10) + 1].icon;
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