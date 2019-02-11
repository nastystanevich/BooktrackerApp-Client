const initialState = null;

function bookReducer(state = initialState, action) {
    switch(action.type) {
    case 'RECEIVED_BOOKS':
        console.log(action.books);
        return Object.assign({}, state, action.books);
    default:
        return state;
    }
}

export default bookReducer;