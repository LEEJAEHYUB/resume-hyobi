import React from "react";
import { Row, Col } from "antd";

import "./css/body-inner.css";

import react from "../../img/skills/react.png";
import react_native from "../../img/skills/react_native.png";
import mobx from "../../img/skills/mobx.png";
import apollo from "../../img/skills/apollo.png";

import reacthooks from "../../img/skills/reacthooks.png";
import nodejs from "../../img/skills/nodejs.png";
import express from "../../img/skills/express.png";
import mysql from "../../img/skills/mysql.png";
import antd from "../../img/skills/antd.png";

import git from "../../img/skills/git.png";
import notion from "../../img/skills/notion.png";
import slack from "../../img/skills/slack.png";
import vsc from "../../img/skills/vsc.png";

const Skills = () => {
	return (
		<div className="card-container">
			<div className="card-title">Skills</div>
			<div className="card-body skill">
				<Row>
					<Col className="skill-title" span={24}>
						More Experience
					</Col>
				</Row>
				<Row>
					<Col className="skill-container" span={24}>
						<span className="skillBox">
							<img className="skillImg" src={react} alt="react" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={react_native} alt="react_native" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={mobx} alt="mobx" />
						</span>
					</Col>
				</Row>

				<Row>
					<Col className="skill-title" span={24}>
						Experience
					</Col>
				</Row>
				<Row>
					<Col className="skill-container" span={24}>
						<span className="skillBox">
							<img className="skillImg" src={reacthooks} alt="reacthooks" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={apollo} alt="apollo" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={nodejs} alt="nodejs" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={express} alt="express" />
						</span>

						<span className="skillBox">
							<img className="skillImg" src={mysql} alt="mysql" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={antd} alt="antd" />
						</span>
					</Col>
				</Row>

				<Row>
					<Col className="skill-title" span={24}>
						Tools
					</Col>
				</Row>
				<Row>
					<Col className="skill-container" span={24}>
						<span className="skillBox">
							<img className="skillImg" src={git} alt="git" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={notion} alt="notion" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={slack} alt="slack" />
						</span>
						<span className="skillBox">
							<img className="skillImg" src={vsc} alt="vsc" />
						</span>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Skills;
