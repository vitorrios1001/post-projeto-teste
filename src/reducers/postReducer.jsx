import * as ActionTypes from '../ActionTypes/postActionTypes'

const INITIAL_STATE = {
    posts: [],
    processandoPosts: false,
    comentarios: [],
    processandoComentarios: false
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
        case ActionTypes.PST_PROCESSANDO_COMENTARIO:
            return{ ...state, processandoComentarios: payload }
            break;                    
        case ActionTypes.PST_GET_COMENTARIO:            
            return{ ...state, comentarios: payload.data }
            break;
        default:
            return { ...state };
            break;
    }
}