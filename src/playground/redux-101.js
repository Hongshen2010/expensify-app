import { createStore } from 'redux';

// Action Generator:
const increment = ({ incrementBy }) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});
// Simple version:
const decrement = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const set = ({setWith = 1} = {}) => ({
    type: 'SET',
    setWith
});
const reset = ({resetWith = 0} = {}) => ({
    type: 'RESET',
    resetWith
});

// Reducer
// 1. reducers are pure functions: 
//      output just depend on the input
//      no interact with vars outside function
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setWith
            }
        case 'RESET':
            return {
                count: action.resetWith
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment(5));
// unsubscribe();
store.dispatch(reset({ resetWith: -100 }));
store.dispatch(decrement({ decrementBy: 3 }));
store.dispatch(decrement({ decrementBy: 2 }));
store.dispatch(set({ setWith: Infinity }));
