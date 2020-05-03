import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { StyledUserInfo } from "./StyledUserInfo";

const UserInfo: React.FC = () => {
	return (
		<StyledUserInfo>
			Вы вошли как... <UserOutlined style={{ fontSize: "25px" }} />
		</StyledUserInfo>
	);
};

export default UserInfo;
