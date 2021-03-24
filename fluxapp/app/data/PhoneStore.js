import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";
import {getAll, addItem, deleteItem, updateItem} from "../api/";

class PhonesStore extends ReduceStore{
    constructor()
    {
        super(PhonesDispatcher);
    }
    getInitialState() {
        return getAll();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return addItem(action.text);

                    return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return deleteItem(action.text);

                    return state.delete(index);
                }
                return state;
            case ActionTypes.UPDATE_ITEM:
                index = state.indexOf(action.oldText);
                if (index > -1) {
                    return updateItem(action.oldText, action.newText);
                    
                    return state.set(index, action.newText);
                }
                return state.copyWithin();
            default:
                return state.copyWithin();
        }
    }
}
export default new PhonesStore();