import React,{ useContext } from "react";
import { ColorContext } from "./Color"

function ColorArea(){
	const {color} = useContext(ColorContext);
	return (
		<div>
			<h3 style={{color:color}}>我是什么颜色呢？</h3>
		</div>
	)
}

export default ColorArea;