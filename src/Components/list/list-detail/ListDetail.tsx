import React from "react";
import { StyledListDetail } from "./StyledListDetail";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { StoreType } from "../../../redux/types";
import { getListsByHistoryId } from "../../../redux/selectors";
import { ListData } from "../../../fixtures";
import { List, Typography } from "antd";

interface Props extends RouteComponentProps {
	list: ListData;
}

const ListDetail: React.FC<Props> = ({ list }) => {
	if (!list) return <Redirect to="/Список" />;
	const date = new Date();
	const month =
		date.getMonth().toString().length > 1
			? date.getMonth()
			: "0" + (date.getMonth() + 1);
	const day =
		date.getDate().toString.length > 1 ? date.getDate() : "0" + date.getDate();
	const year = date.getFullYear();
	return (
		<StyledListDetail>
			<Typography.Title level={3}>{list.title}</Typography.Title>
			<List
				size="large"
				header={
					<div>
						<strong>{list.text}</strong>
					</div>
				}
				footer={<div>{`${day}.${month}. ${year}`}</div>}
				bordered
				dataSource={list.detail}
				renderItem={item => <List.Item>{item}</List.Item>}
			/>
		</StyledListDetail>
	);
};

const mapStateToProps = (state: StoreType, ownProps: Props) => ({
	list: getListsByHistoryId(state, ownProps),
});

export default connect(mapStateToProps)(ListDetail as React.FC);
