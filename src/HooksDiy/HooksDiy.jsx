import React, {useState, useEffect, useCallback} from "react";

function useWinSize(){
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	});
	const onResize = useCallback( () => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		})
	},[]);
	useEffect( () => {
		window.addEventListener('resize', onResize, false);
		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	},[])

	return size;
}


function HooksDiyDemo(){
	const size = useWinSize();
	return (
		<p>当前页面的大小是{size.width}x{size.height}</p>	
	)
}

export default HooksDiyDemo