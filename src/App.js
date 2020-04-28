import React from "react";
import { Row, Col } from "antd";

import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
	return (
		<div className="app-container">
			<div className="container">
				<Row className="header">
					<Header />
				</Row>

				<Row className="body">
					<Body />
				</Row>

				<Row className="footer">
					<Col className="footer-title">Hyobi's RESUME ©2020 Created by HYOBI</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
