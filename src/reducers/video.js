import { SET_VIDEO } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_VIDEO:
            return action.video;
        default: return state;
    }
}