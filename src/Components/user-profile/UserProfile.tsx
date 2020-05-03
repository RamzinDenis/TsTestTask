import React from "react";
import { StyledUserProfile } from "./StyledUserProfile";
import { RouteComponentProps, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { StoreType } from "../../redux/types";
import { getUserById } from "../../redux/selectors";
import UserDescription from "./user-descriptions";
import { CloseOutlined } from "@ant-design/icons";

// и тут пофкиксить

interface Props extends RouteComponentProps {
	user?: { [key: string]: any };
}
// исправить
const UserProfile: React.FC<Props> = ({ match, user }) => {
	if (!user) return <Redirect to={`/Таблицы`} />;
	console.log(user);

	return (
		<StyledUserProfile>
			<UserDescription user={user} />
			<NavLink to={`/Таблицы`}>
				<CloseOutlined className="close-btn" />
			</NavLink>
		</StyledUserProfile>
	);
};

export default connect((state: StoreType, ownProps) => ({
	user: getUserById(state, ownProps),
}))(UserProfile as React.FC);
