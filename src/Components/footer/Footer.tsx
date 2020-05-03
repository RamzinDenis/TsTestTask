import React from "react";
import { StyledFooter } from "./StyledFooter";
import { CopyrightCircleOutlined } from "@ant-design/icons";

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<span>Рамзин Денис </span>
			<span>2020</span>
			<CopyrightCircleOutlined />
		</StyledFooter>
	);
};

export default Footer;
