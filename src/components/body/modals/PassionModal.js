import React from "react";

import "../css/body-modal.css";

import code from "../../../img/passions/pa-coding.jpg";
import fish from "../../../img/passions/pa-fish.jpg";
import foot from "../../../img/passions/pa-foot2.jpg";
import trip from "../../../img/passions/pa-trip.jpg";

const PassionModal = () => {
	return (
		<div className="modal-passion-container">
			<div className="modal-passion-content-container">
				<div className="modal-passion-img-container">
					<img className="modal-passion-img" src={code} alt="" />
				</div>
				<div className="modal-passion-text-container">
					<div className="modal-passion-text">
						저는 비전공개발자로 개발자라는 커리어를 전환할 때 큰 이유 중 하나가 흥미였습니다.
					</div>
					<div className="modal-passion-text">
						코딩이 재밌어서 현재도 사이드 프로젝트를 진행중에 있습니다.
					</div>
					<div className="modal-passion-text">이러한 흥미를 실력으로 발전시키는 개발자가 되고 싶습니다.</div>
				</div>
			</div>

			<div className="modal-passion-content-container">
				<div className="modal-passion-img-container">
					<img className="modal-passion-img" src={fish} alt="" />
				</div>

				<div className="modal-passion-text-container">
					<div className="modal-passion-text">낚시를 좋아합니다.</div>
					<div className="modal-passion-text">
						낚시는 모르는 사람들과의 친분도 쌓고 성취감이 큰 취미입니다.
					</div>
				</div>
			</div>

			<div className="modal-passion-content-container">
				<div className="modal-passion-img-container">
					<img className="modal-passion-img" src={foot} alt="" />
				</div>

				<div className="modal-passion-text-container">
					<div className="modal-passion-text">풋살을 좋아합니다.</div>
					<div className="modal-passion-text">
						팀스포츠를 통해 사람들과의 유대감 형성과 승부욕을 고취시켜줍니다.
					</div>
				</div>
			</div>

			<div className="modal-passion-content-container">
				<div className="modal-passion-img-container">
					<img className="modal-passion-img" src={trip} alt="" />
				</div>

				<div className="modal-passion-text-container">
					<div className="modal-passion-text">여행을 좋아합니다.</div>
					<div className="modal-passion-text">계획, 무계획 가리지 않고 가는 것을 좋아합니다.</div>
					<div className="modal-passion-text">나를 재충전 시켜주는 최고의 취미입니다.</div>
				</div>
			</div>
		</div>
	);
};

export default PassionModal;
