import * as ActionTypes from '../ActionTypes/postActionTypes'

const INITIAL_STATE = {
    posts: [],
    processandoPosts: false
}

export default (state = INITIAL_STATE, action) => {
    
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.PST_PROCESSANDO_POST:
            return{ ...state, processandoPosts: payload }
            break;                    
        case ActionTypes.PST_GET_POST:            
            return{ ...state, posts: payload.data }
            break;              
        default:
            return { ...state };
            break;
    }
}