import {
    SET_GENRES,
    SET_MODAL_STATUS,
    SET_ARTISTS
} from './actionTypes';

export const setGenres = (genres) => {
    return {
        type: SET_GENRES,
        payload: genres
    }
}

export const setModalStatus = (status) => {
    return {
        type: SET_MODAL_STATUS,
        payload: status
    }
}

export const setArtists = (artists) => {
    return {
        type: SET_ARTISTS,
        payload: artists
    }
}