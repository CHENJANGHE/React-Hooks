import React, { useReducer } from "react";

function init(initCount = 0){
	return {count: initCount}
}

function reducer(state, action) {
	switch(action.type) {
		case 'increment':
			return {count: state.count+1};
		case 'decrement':
			return {count: (state.count > 0 ? state.count-1 : 0)}
		case 'reset':
			return init(action.payload)
		default:
			throw new Error();
	}
}


function ReducerDemo({initCount}){
	const [state, dispatch] = useReducer(reducer,initCount, init);
	return (
		<div>
			Count: {state.count}<br/>
			<button onClick={()=>dispatch({type:"reset", payload: initCount})}>
				Reset
			</button>
			<button onClick={()=> dispatch({type: "increment"})}>
				增加+
			</button>
			<button onClick={()=> dispatch({type: "decrement"})}>减少-</button>
		</div>
	)
}



export default ReducerDemo;