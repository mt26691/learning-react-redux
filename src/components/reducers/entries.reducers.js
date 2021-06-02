

const initialEntries = [
    {
        id: 1,
        description: 'Work Income',
        value: 1000,
        isExpense: false
    },
    {
        id: 2,
        description: 'Water bill',
        value: 10,
        isExpense: true
    },
    {
        id: 3,
        description: 'Rental fee',
        value: 300,
        isExpense: true
    },
    {
        id: 4,
        description: 'Power Bill1',
        value: 50,
        isExpense: true
    },
];

const reducer = (state = initialEntries, action) => {
    console.log('action: ', action);
    let newEntries;
    switch (action.type) {
        case 'ADD_ENTRY':
            newEntries = state.concat({ ...action.payload });
            return newEntries;
        case 'REMOVE_ENTRY':
            return state.filter(t => t.id !== action.payload.id);
        case 'UPDATE_ENTRY':
            newEntries = [...state];
            const index = newEntries.findIndex(t => t.id === action.payload.id);
            newEntries[index] = { ...action.payload.entry }
            return newEntries;
        default:
            break;
    }
    return state;
}
export default reducer;