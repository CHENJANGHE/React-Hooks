import React,{useContext} from "react";
import {ColorContext, UPDATE_COLOR } from "./Color.jsx"

function ButtonDemo(){
	const {dispatch} = useContext(ColorContext);
	return (
		<div>
			<button onClick={()=>{dispatch({type: UPDATE_COLOR, color:'pink'})}}>紫色</button>
			<button onClick={()=>{dispatch({type: UPDATE_COLOR, color:'green'})}}>绿色</button>
		</div>
	)
}

export default ButtonDemo;