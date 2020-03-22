import {
    WINDOW_DIM_UPDATED
} from './Types';


export const updateWindowDimensions = () => {

    return {
        type: WINDOW_DIM_UPDATED,
        payload: {
            newWindowHeight: window.innerHeight,
            newWindowWidth: window.innerWidth
        }
    };
}