import {
    SET_GENRES,
    SET_MODAL_STATUS,
    SET_ARTISTS
} from '../actions/actionTypes';

const initState = {
    genres: [],
    modalOpen: false,
    artists: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === SET_GENRES) {
        return {
            ...state,
            genres: action.payload
        }
    }
    else if (action.type === SET_MODAL_STATUS) {
        return {
            ...state,
            modalOpen: action.payload
        }
    }
    else if (action.type === SET_ARTISTS ) {
        return {
            ...state,
            artists: action.payload
        }
    }
        return state;
}

export default rootReducer;