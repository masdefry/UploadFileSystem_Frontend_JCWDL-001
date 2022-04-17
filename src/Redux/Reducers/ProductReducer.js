let initialState = {
    data: null,
    getError: null,
    getMessage: null,
    insertError: null,
    insertMessage: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_SUCCESS':
            return { data: action.payload.data, getError: action.payload.error, getMessage: action.payload.message }
        case 'INSERT_ERROR':
            return{ ...state, insertError: action.payload.error, insertMessage: action.payload.message }
        default : return state
    }
}

export default productReducer