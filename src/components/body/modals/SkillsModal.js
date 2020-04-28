import React from "react";

import "../css/body-modal.css";

import react from "../../../img/skills/react.png";
import react_native from "../../../img/skills/react_native.png";
import mobx from "../../../img/skills/mobx.png";
import apollo from "../../../img/skills/apollo.png";

import reacthooks from "../../../img/skills/reacthooks.png";
import nodejs from "../../../img/skills/nodejs.png";
import express from "../../../img/skills/express.png";
import mysql from "../../../img/skills/mysql.png";
import antd from "../../../img/skills/antd.png";

import git from "../../../img/skills/git.png";
import notion from "../../../img/skills/notion.png";
import slack from "../../../img/skills/slack.png";
import vsc from "../../../img/skills/vsc.png";

const SkillsModal = () => {
	return (
		<div className="modal-container">
			<div className="modal-skill-container">
				<div className="modal-skill-small-container">
					<div className="modal-skill-title">More Experience</div>
					<div className="modal-skill-img-container">
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={react} alt="react" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={react_native} alt="react_native" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={mobx} alt="mobx" />
						</div>
					</div>
				</div>

				<div className="modal-skill-small-container">
					<div className="modal-skill-title">Experience</div>
					<div className="modal-skill-img-container">
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={reacthooks} alt="reacthooks" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={apollo} alt="apollo" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={nodejs} alt="nodejs" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={express} alt="express" />
						</div>

						<div className="modal-skillBox">
							<img className="modal-skillImg" src={mysql} alt="mysql" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={antd} alt="antd" />
						</div>
					</div>
				</div>

				<div className="modal-skill-small-container">
					<div className="modal-skill-title">Tools</div>
					<div className="modal-skill-img-container">
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={git} alt="git" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={notion} alt="notion" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={slack} alt="slack" />
						</div>
						<div className="modal-skillBox">
							<img className="modal-skillImg" src={vsc} alt="vsc" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsModal;
