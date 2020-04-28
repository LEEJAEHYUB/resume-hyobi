import React from "react";

import "../css/body-modal.css";
import strength2 from "../../../img/strength2.png";

const StrengthModal = () => {
	return (
		<div className="modal-container">
			<div className="modal-str-img-container">
				<img className="modal-str-img" src={strength2} alt="str_detail_img" />
			</div>
		</div>
	);
};

export default StrengthModal;
