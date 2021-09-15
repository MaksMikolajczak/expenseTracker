const contextReducer = (state, action) => {
    let contracts;
    switch (action.type) {
        case 'DELETE_CONTRACT' :
            contracts = state.filter((c) => c.id !== action.payload);

            return contracts;
            break;
            case 'ADD_CONTRACT':
                contracts = [action.payload, ...state];

                return contracts;
                break;

        default:
            return state;
    }

};

export default contextReducer;