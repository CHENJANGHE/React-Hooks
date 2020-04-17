import React, {useState} from "react";


function Example(){

	//声明state变量
	const [count, setCount] = useState(0);
	return (
		<div>
			<h3>你点击了{count}次</h3>
			<button onClick={() => setCount(count + 1)}>点击</button>
		</div>
	)
}
export default Example