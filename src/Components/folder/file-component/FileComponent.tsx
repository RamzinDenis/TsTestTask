import React from "react";
import { StyledFile } from "./StyledFileComponent";
import { FileOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { loadSelectedFile } from "../../../redux/actions";

interface Props {
	name: string;
	id: string;
	loadSelectedFile: (id: string) => void;
}

const FileComponent: React.FC<Props> = ({ name, loadSelectedFile, id }) => {
	return (
		<StyledFile onClick={() => loadSelectedFile(id)}>
			<FileOutlined /> {name}
		</StyledFile>
	);
};

export default connect(null, { loadSelectedFile })(FileComponent);
