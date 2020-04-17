import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function Index(){
	useEffect( () => {
		console.log(`useEffect=>Index 你来了`);
		return () => {
			console.log(`useEffect=>Index 你走了`);
		}
	})
	return (
		<div>我是Index页面</div>
	)
}
function List(){
	return (
		<div>我是List页面</div>
	)
}
function HooksLife(){
	const [count, setCount] = useState(0);
	useEffect( () => {
		console.log(`useEffect=>你点击了${count}次`);
		return () => {
			console.log(`+++++++++++++++++++`);
		}
	},[count])
	
	return (
		<div>
			<h3>你点击了{count}次</h3>
			<button onClick={() => setCount(count + 1)}>点击</button>


			<div>
				<Router>
					<div>
						<ul>
							<li><Link to="/">首页</Link></li>
							<li><Link to="/list/">List</Link></li>
						</ul>
					</div>
					<Route>
						<Route path="/list/" component={List}/>
						<Route path="/" exact component={Index}/>
					</Route>
				</Router>
			</div>
		</div>
	)
}
export default HooksLife;