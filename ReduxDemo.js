const redux = require('redux');

const reducer = (state={counter:0},action)=>{
    if(action.type==="increment"){
    return {
      counter: state.counter + 1,
    };
    }

    if(action.decrement==="decrement"){
        return{
            conter:state.counter-1
        }
    }
    return state
}

const store = redux.createStore(reducer)

console.log(store.getState())
const counterSubscriber = ()=>{
    const Lateststate = store.getState()
    console.log(Lateststate)
}

store.subscribe(counterSubscriber)
store.dispatch({ type: "incremet" });
store.dispatch({type:"decrement"})