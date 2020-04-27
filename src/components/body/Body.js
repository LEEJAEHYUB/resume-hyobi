import React from "react";
import { Row, Col } from "antd";

import "antd/dist/antd.css";
import "./css/body.css";

import Strength from "./Strength";
import Skills from "./Skills";
import Projects from "./Projects";
import Exprience from "./Exprience";
import Passion from "./Passion";

const Body = () => {
	return (
		<div className="body-container">
			<Row className="body-1">
				<Col span={11} className="body- str">
					<Strength />
				</Col>

				<Col span={11} className="body- skill">
					<Skills />
				</Col>
			</Row>

			<Row className="body-2">
				<Col span={11} className="body- project">
					<Projects />
				</Col>

				<Col span={11} className="body- ex">
					<div className="body-3">
						<Exprience />
					</div>
					<div className="body-4">
						<Passion />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Body;
