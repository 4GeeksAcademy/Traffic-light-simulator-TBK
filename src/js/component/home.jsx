import React from "react";
import { useState } from "react";

//create your first component
function Home() {

const [ color, setColor] = useState("")

	return (
		<div className="traffic-lights">
			<button onClick={() => setColor("red")} className={color === "red" ? "red-selected" : "red"}></button>
			<button onClick={() => setColor("yellow")} className={color === "yellow" ? "yellow-selected" : "yellow"}></button>
			<button onClick= {() => setColor("green")} className={color=== "green" ? "green-selected" : "green"}></button>
		</div>
	);
};

export default Home;

// onClick={() => setColor("")}

/* actualizar el valor de usestate "red" en color
	<button onClick={() => setColor("red")} className={class}></button>
	reemplazar valor color en variable:
	function class (color){
		return color + -selected
	}
	 */
