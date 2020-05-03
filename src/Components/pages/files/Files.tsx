import React, { useEffect, useState } from "react";
import { StyledFiles, DirectoryWrapper } from "./StyledFiles";
import Folder from "../../folder";
import { folderData } from "../../../fixtures";
import FileOverview from "../../card/FileOverview";

const Files: React.FC = () => {
	return (
		<StyledFiles>
			<DirectoryWrapper>
				<h2>Навигация</h2>
				{folderData.map(folder => (
					<Folder {...folder} key={folder.id} />
				))}
			</DirectoryWrapper>
			<FileOverview />
		</StyledFiles>
	);
};

export default Files;
