import React from "react";

import "./css/body-inner.css";

import serendipityIntro from "../../img/projectIntro/finalProjectIntro.png";
import diSlackIntro from "../../img/projectIntro/firstProjectIntro.png";

const Project = () => {
	return (
		<div className="card-container">
			<div className="card-title">Projects</div>
			<div className="card-body">
				<div className="card-project-container">
					<div className="card-project-img-container">
						<img className="card-project-img" src={serendipityIntro} alt="serendipity" />
					</div>
					<div className="card-project-text-container">
						<span className="card-project-text">Serendipity - mobile</span>
					</div>
				</div>
				<div className="card-project-container">
					<div className="card-project-img-container">
						<img className="card-project-img" src={diSlackIntro} alt="diSlack" />
					</div>
					<div className="card-project-text-container">
						<span className="card-project-text">Serendipity - web</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
