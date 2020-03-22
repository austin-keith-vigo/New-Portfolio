import {
    WINDOW_DIM_UPDATED
} from './../Actions/Types';

const INITIAL_STATE = {
    windowHeight: null,
    windowWidth: null
}

export default(state=INITIAL_STATE, action) => {
    switch(action.type){
        case WINDOW_DIM_UPDATED: 
            // const { newWindowHeight, newWindowWidth } = action.paylod;
            // return {...state, windowHeight: newWindowHeight, windowWidth: newWindowWidth};
            console.log(action.payload)
            return{...state, windowHeight: action.payload.newWindowHeight, windowWidth: action.payload.newWindowWidth};
        default:
            return {...state};
    };
};