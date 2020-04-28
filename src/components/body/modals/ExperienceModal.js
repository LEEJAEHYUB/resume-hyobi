import React from "react";
import { Col, Timeline } from "antd";

import "../css/body-modal.css";

const ExperienceModal = () => {
	return (
		<div className="modal-container">
			<div className="modal-ex-container">
				<Col span={24}>
					<Timeline className="timeLine">
						<Timeline.Item className="timeLineTxt" color="green">
							<p>2017-08 서경대학교 도시공학과 졸업</p>
						</Timeline.Item>

						<Timeline.Item className="timeLineTxt" color="blue">
							<p>2017-09 Hyein E&C 입사</p>
							<p>2019-06 Hyein E&C 퇴사</p>
						</Timeline.Item>

						<Timeline.Item className="timeLineTxt" color="orange">
							<p>2019-07 CodeStates, Immersive Program START!</p>
							<Timeline.Item className="timeLineTxt" color="orange">
								2020-01 diSlack Project
							</Timeline.Item>
							<Timeline.Item className="timeLineTxt" color="orange">
								2020-02 Serendipity Project
							</Timeline.Item>
						</Timeline.Item>
						<Timeline.Item className="timeLineTxt" color="orange">
							<p>2020-02 CodeStates, Immersive Program END!</p>
						</Timeline.Item>

						<Timeline.Item className="timeLineTxt" color="green">
							<p>2020-02~ 개발자로서 매일 발전 진행중!</p>
						</Timeline.Item>
					</Timeline>
				</Col>
			</div>
		</div>
	);
};

export default ExperienceModal;
