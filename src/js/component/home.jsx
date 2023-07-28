import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ selectedColor, setSelectedColor] = useState ("red");
	return (
		<div className="container-fluid">
			<div className="traffic-light">
				<div onClick={() => setSelectedColor("red")} className={"light red"+((selectedColor === "red") ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("orange")} className={"light orange"+((selectedColor === "orange") ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green"+((selectedColor === "green") ? " glow" : "")}></div>
			</div>
		</div>

	);
};

export default Home;
