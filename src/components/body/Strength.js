import React from "react";

import "./css/body-inner.css";

import strength1 from "../../img/strength1.png";

const Strength = () => {
	return (
		<div className="card-container">
			<div className="card-title">Strength</div>
			<div className="card-body">
				<img className="card-body-img" src={strength1} alt="str1" />
			</div>
		</div>
	);
};

export default Strength;
