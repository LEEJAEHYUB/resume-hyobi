import React from "react";

import "antd/dist/antd.css";
import "./css/header.css";
import profile from "../../img/profile.jpg";

import { Row, Col } from "antd";
import { LinkOutlined, PhoneOutlined, MailOutlined, GithubOutlined, IdcardOutlined } from "@ant-design/icons";

const Header = () => {
	return (
		<Row className="header-container">
			<Col className="header- pic" span={5}>
				<div className="header- pic-container">
					<img className="header- pic-img" src={profile} alt="Hyobi" />
				</div>
			</Col>

			<Col className="header- name" span={9}>
				<div className="header- name-title">LEEJAEHYUB</div>
				<div className="header- name-sub">Front-End Development</div>
				<div className="header- name-desc">어제와는 다른 나를 꿈꾸는 개발자 입니다. </div>
			</Col>

			<Col className="header- links" span={10}>
				<div className="header- icon mobile">
					<PhoneOutlined /> 010.4136.5511
				</div>
				<div
					className="header- icon email"
					onClick={() => {
						window.open("https://mail.google.com");
					}}
				>
					<MailOutlined /> woguqdl20@gmail.com
				</div>
				<div
					className="header- icon git"
					onClick={() => {
						window.open("https://github.com/LEEJAEHYUB");
					}}
				>
					<GithubOutlined /> https://github.com/LEEJAEHYUB
				</div>
				<div
					className="header- icon link"
					onClick={() => {
						window.open("https://hyobi.tistory.com/");
					}}
				>
					<LinkOutlined /> https://hyobi.tistory.com/
				</div>
				<div
					className="header- icon port"
					onClick={() => {
						window.open("https://leejaehyub.github.io/portfolio-hyobi/");
					}}
				>
					<GithubOutlined /> https://leejaehyub.github.io/portfolio-hyobi/
				</div>
			</Col>
		</Row>
	);
};

export default Header;
