export const initialState = {
    user: null
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    LOGOUT: 'LOGOUT'
};

const reducer = (state = initialState, action) => {
    console.log( action);
    switch (action.type) {
        case actionTypes.SET_USER:
            //Devuelve todo lo que contiene la cada de datos en ese momento
            //...state: todo lo que tiene en ese momento
            //user: cambia el usuario actual por el que el nuevo que se lo haya pasado
            return {
                ...state,
                user: action.user
            };
        case actionTypes.LOGOUT:
            return {
                state           
            }
        default:
            return state;
    }
}

export default reducer