import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    initialize(itemBuild, materia, job) {
        Dispatcher.dispatch({
            type: ActionTypes.INITIALIZE,
            itemBuild,
            materia,
            job,
        });
    },
}