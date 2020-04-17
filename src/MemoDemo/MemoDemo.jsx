import React, {useState, useMemo} from "react";


function MemoDemo(){
	const [wandou, setWandou] = useState('豌豆射手发射');
	const [taiyanghua, setTaiyanghua ] = useState('收集能量');

	return (
		<div>
			<button onClick={() => {setWandou(new Date().getTime())}}>豌豆射手</button>
			<button onClick={() => {setTaiyanghua(new Date().getTime()+'收集能量')}}>太阳花</button>
			<ChildDemo name={wandou}>{taiyanghua}</ChildDemo>
		</div>
	)
}

function ChildDemo({name, children}){
	function fashe(){
		console.log("豌豆射手已就位，发射！");
		return name+'发射' 
	}
	const actionWandou = useMemo(() =>fashe(name), [name]);
	return (
		<div>
			<div>{actionWandou}</div>
			<div>{children}</div>

		</div>
	)
}

export default MemoDemo;