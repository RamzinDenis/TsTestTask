import React, { useState } from "react";
import { StyledFolder, StyledFolderContainer } from "./StyledFolder";
import { FolderOutlined } from "@ant-design/icons";
import FileComponent from "./file-component";
import { FolderData } from "../../fixtures";

interface Props extends FolderData {}

const Folder: React.FC<Props> = ({ name, files }) => {
	const [visible, setVisible] = useState(false);
	return (
		<StyledFolderContainer>
			<StyledFolder onClick={() => setVisible(!visible)}>
				<FolderOutlined /> {name}
			</StyledFolder>
			{visible && files.map(file => <FileComponent {...file} key={file.id} />)}
		</StyledFolderContainer>
	);
};

export default Folder;
