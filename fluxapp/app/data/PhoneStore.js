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
        return Immutable.List(getAll());
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    addItem(action.text);

                    return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    deleteItem(action.text);

                    return state.delete(index);
                }
                return state;
            case ActionTypes.UPDATE_ITEM:
                index = state.indexOf(action.oldText);
                if (index > -1) {
                    updateItem(action.oldText, action.newText);
                    
                    return state.set(index, action.newText);
                }
                return state;
            default:
                return state;
        }
    }
}
export default new PhonesStore();