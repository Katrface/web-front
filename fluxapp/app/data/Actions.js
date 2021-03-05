import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";

const Actions = {
    addItem(text) {
        PhonesDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            text,
        });
    },
    removeItem(text) {
        PhonesDispatcher.dispatch({
            type: ActionTypes.REMOVE_ITEM,
            text,
        });
    },
    updateItem(oldText, newText) {
        PhonesDispatcher.dispatch({
            type: ActionTypes.UPDATE_ITEM,
            oldText: oldText,
            newText: newText,
        });
    }
};

export default Actions;