import React from "react";

import "./css/body-inner.css";

import { CodeOutlined } from "@ant-design/icons";
import { GiFishingPole, GiSoccerBall } from "react-icons/gi";
import { IoMdAirplane } from "react-icons/io";

const Passion = () => {
	return (
		<div className="card-container">
			<div className="card-title">Passion</div>
			<div className="card-body">
				<div className="card-passion-icon-container">
					<CodeOutlined className="card-passion-icon" />

					<GiFishingPole className="card-passion-icon" />
					<GiSoccerBall className="card-passion-icon" />
					<IoMdAirplane className="card-passion-icon" />
				</div>
			</div>
		</div>
	);
};

export default Passion;
