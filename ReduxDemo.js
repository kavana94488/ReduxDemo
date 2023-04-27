const redux = require('redux');

const reducer = (state={counter:0},action)=>{
    return{
        counter:state.counter+1
    }
}

const store = redux.createStore(reducer)

console.log(store.getState())
const counterSubscriber = ()=>{
    const Lateststate = store.getState()
    console.log(Lateststate)
}

store.subscribe(counterSubscriber)
store.dispatch({ type: "incremet" });