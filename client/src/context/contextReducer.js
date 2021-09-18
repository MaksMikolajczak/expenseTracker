const contextReducer = (state, action) => {
    let contracts;
    switch (action.type) {
        case 'DELETE_CONTRACT' :
            contracts = state.filter((c) => c.id !== action.payload);
            localStorage.setItem('contracts', JSON.stringify(contracts));
            return contracts;
            break;
            case 'ADD_CONTRACT':
                contracts = [action.payload, ...state];
                localStorage.setItem('contracts', JSON.stringify(contracts));
                return contracts;
                break;

        default:
            return state;
    }

};

export default contextReducer;