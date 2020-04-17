import React, {useRef} from "react";

function RefDemo(){
	const inputEl = useRef('cm');
	const BtnClick = () => {
		
		inputEl.current.focus();
	}
	return (
		<div>
			<input ref={inputEl} type="text" />
			<button onClick={BtnClick}>聚焦Input</button>
		</div>
	)
}

export default RefDemo