import React from "react";
import { connect } from "react-redux";
import { StyledCardData, StyledError } from "./StyledFileOverview";
import { getSelectedFileOrError } from "../../redux/selectors";
import { StoreType } from "../../redux/types";
import { Card } from "antd";
interface Props {
	fileData: { [key: string]: any };
}

const gridStyle = {
	width: "25",
	textAlign: "center",
};

const CardData: React.FC<Props> = ({ fileData }) => {
	if (typeof fileData === "string")
		return (
			<StyledError>
				Извините, но, к сожалению, данной страницы не существует... <br />
				<span>Выберите другой файл</span>
			</StyledError>
		);
	if (!fileData.content)
		return (
			<h2 style={{ textAlign: "center", marginLeft: "20%" }}>Выберите файл</h2>
		);

	return (
		<StyledCardData>
			<h2>{fileData.title}</h2>
			<Card>
				{fileData.content?.map((data: string[], index: number) => (
					<Card.Grid style={gridStyle as any} key={index}>
						{data}
					</Card.Grid>
				))}
			</Card>
		</StyledCardData>
	);
};

export default connect((state: StoreType) => ({
	fileData: getSelectedFileOrError(state),
}))(CardData as React.FC);
