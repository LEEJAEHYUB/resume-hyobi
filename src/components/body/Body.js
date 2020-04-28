import React, { useState } from "react";
import { Row, Col, Modal } from "antd";

import "antd/dist/antd.css";
import "./css/body.css";

import Strength from "./Strength";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Passion from "./Passion";

import ExperienceModal from "./modals/ExperienceModal";
import PassionModal from "./modals/PassionModal";
import ProjectModal from "./modals/ProjectModal";
import SkillsModal from "./modals/SkillsModal";
import StrengthModal from "./modals/StrengthModal";

const Body = () => {
	const [key, setKey] = useState("");

	const handleModal = (val) => {
		setKey(val);
	};

	const [visible, setVisible] = useState(false);

	const onModal = () => {
		setVisible(true);
	};

	const offModal = () => {
		setVisible(false);
	};

	return (
		<div className="body-container">
			<Row className="body-1">
				<Col
					span={11}
					className="body- str"
					onClick={() => {
						handleModal("str");
						onModal();
					}}
				>
					<Strength />
				</Col>

				<Col
					span={11}
					className="body- skill"
					onClick={() => {
						handleModal("skill");
						onModal();
					}}
				>
					<Skills />
				</Col>
			</Row>

			<Row className="body-2">
				<Col
					span={11}
					className="body- project"
					onClick={() => {
						handleModal("project");
						onModal();
					}}
				>
					<Projects />
				</Col>

				<Col span={11} className="body- ex">
					<div
						className="body-3"
						onClick={() => {
							handleModal("ex");
							onModal();
						}}
					>
						<Experience />
					</div>
					<div
						className="body-4"
						onClick={() => {
							handleModal("passion");
							onModal();
						}}
					>
						<Passion />
					</div>
				</Col>
			</Row>

			<Modal visible={visible} onOk={offModal} onCancel={offModal}>
				{key === "str" ? (
					<StrengthModal />
				) : key === "skill" ? (
					<SkillsModal />
				) : key === "project" ? (
					<ProjectModal />
				) : key === "ex" ? (
					<ExperienceModal />
				) : key === "passion" ? (
					<PassionModal />
				) : (
					""
				)}
			</Modal>
		</div>
	);
};

export default Body;
