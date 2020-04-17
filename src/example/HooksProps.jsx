import React, {useState, createContext, useContext} from "react";


const CountContext = createContext();

function Children(){
	const count = useContext(CountContext);
	return (
		<div>{count}</div>
	)
}

function HooksProps(){

	//声明state变量
	const [count, setCount] = useState(0);


	return (
		<div>
			<h3>你点击了{count}次</h3>
			<button onClick={() => setCount(count + 1)}>点击</button>

			<CountContext.Provider value={count}>
				<Children />
			</CountContext.Provider>
		</div>
	)
}
export default HooksProps