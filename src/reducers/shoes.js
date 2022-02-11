export default (shoes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return shoes;
        default:
            return shoes;
    }

}