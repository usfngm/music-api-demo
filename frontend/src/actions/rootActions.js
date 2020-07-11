import { SET_GENRES } from './actionTypes';

export const setGenres = (genres) => {
    return {
        type: SET_GENRES,
        payload: genres
    }
}