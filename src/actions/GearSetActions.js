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

    openModal(modalSlot) {
        Dispatcher.dispatch({
            type: ActionTypes.OPENMODAL,
            modalSlot,
        });
    },

    closeModal() {
        Dispatcher.dispatch({
            type: ActionTypes.CLOSEMODAL,
        });
    },

    notFound() {
        Dispatcher.dispatch({
            type: ActionTypes.NOTFOUND,
        });
    },
}