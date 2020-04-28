import React from "react";

import { Col } from "antd";

import "./css/body-inner.css";
import { MdWork } from "react-icons/md";
import { EditOutlined } from "@ant-design/icons";

const Experience = () => {
	return (
		<div className="card-container">
			<div className="card-title">Experience</div>
			<div className="card-body">
				<div className="card-ex-container">
					<Col span={12} className="card-ex-icon">
						<MdWork />
						<div className="card-ex-text">도시공학 전공</div>
						<div className="card-ex-text">도시관련 취업</div>
					</Col>
					<Col span={12} className="card-ex-icon">
						<EditOutlined />
						<div className="card-ex-text">서경대학교 도시공학과 졸업</div>
						<div className="card-ex-text">부트캠프 CODE-STATES 수료</div>
					</Col>
				</div>
			</div>
		</div>
	);
};

export default Experience;
