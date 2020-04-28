import React from "react";

import "../css/body-modal.css";

import SerenIntro from "../../../img/projectSerendipity/intro.gif";
import SerenStack from "../../../img/projectSerendipity/fullstack.png";
import SerenSwipe from "../../../img/projectSerendipity/cardSwipe.gif";
import SerensignupMap from "../../../img/projectSerendipity/signupMap.gif";

import disChat from "../../../img/projectDislack/chat.gif";
import disThread from "../../../img/projectDislack/thread.gif";
import disStack from "../../../img/projectDislack/final_stack.png";
import disSearch from "../../../img/projectDislack/search.gif";

const ProjectModal = () => {
	return (
		<div className="modal-project-container">
			<div className="modal-project-1">
				<div className="modal-project-title">Serendipity</div>
				<div className="modal-project-text">Trailer </div>
				<div className="modal-intro-container">
					<img className="modal-intro-img" src={SerenIntro} alt="intro" />
					<img className="modal-intro-img" src={SerenSwipe} alt="intro" />
					<img className="modal-intro-img" src={SerensignupMap} alt="intro" />
				</div>
				<div className="modal-stack-container">
					<div className="modal-project-text">Stack</div>
					<img className="modal-stack-img" src={SerenStack} alt="intro" />
				</div>
				<div
					className="modal-project-click"
					onClick={() => {
						window.open("https://leejaehyub.github.io/portfolio-hyobi/");
					}}
				>
					자세한 내용은 포트폴리오를 방문해주세요(Click)!
				</div>
			</div>

			<div className="modal-project-1">
				<div className="modal-project-title">diSlack</div>
				<div className="modal-project-text">Trailer</div>
				<div className="modal-intro-container-2">
					<img className="modal-intro-img" src={disChat} alt="intro" />
					<img className="modal-intro-img" src={disThread} alt="intro" />
					<img className="modal-intro-img" src={disSearch} alt="intro" />
				</div>
				<div className="modal-stack-container">
					<div className="modal-project-text">Stack</div>
					<img className="modal-stack-img" src={disStack} alt="intro" />
				</div>
				<div
					className="modal-project-click"
					onClick={() => {
						window.open("https://leejaehyub.github.io/portfolio-hyobi/");
					}}
				>
					자세한 내용은 포트폴리오를 방문해주세요(Click)!
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
