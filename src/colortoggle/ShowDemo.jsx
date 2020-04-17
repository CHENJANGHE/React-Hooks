import React from "react";
import {Color} from "./Color.jsx"
import ColorArea from "./ColorArea.jsx"
import ButtonDemo from "./ButtonDemo.jsx"


function ShowDemo(){
	return (
		<div>
			<Color>
				<ColorArea />
				<ButtonDemo />
			</Color>
		</div>
	)
}

export default ShowDemo;