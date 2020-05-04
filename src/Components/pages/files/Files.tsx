import React from "react";
import { StyledFiles, DirectoryWrapper } from "./StyledFiles";
import Folder from "../../folder";
import FileOverview from "../../card/FileOverview";
import FilesContainer from "./FilesContainer";
import { FolderData } from "../../../fixtures";

export interface Props {
	currentItem?: number;
	setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
	setEnterPressed: React.Dispatch<React.SetStateAction<number>>;
	setCurrentArrayLength: React.Dispatch<React.SetStateAction<number>>;
	currentArrayLength: number;
	enterPressedOnItemIndex: number;
	folderData: FolderData[];
}

const Files: React.FC<Props> = ({
	currentItem,
	setCurrentItem,
	setEnterPressed,
	currentArrayLength,
	setCurrentArrayLength,
	enterPressedOnItemIndex,
	folderData,
}) => {
	return (
		<StyledFiles>
			<DirectoryWrapper>
				<h2>Навигация</h2>
				{folderData.map((folder, index) => (
					<Folder
						{...folder}
						key={folder.id}
						currentItem={currentItem}
						setCurrentItem={setCurrentItem}
						index={index}
						setCurrentArrayLength={setCurrentArrayLength}
						initialLength={folderData.length}
						currentArrayLength={currentArrayLength}
						setEnterPressed={setEnterPressed}
						enterPressedOnItemIndex={enterPressedOnItemIndex as number}
					/>
				))}
			</DirectoryWrapper>
			<FileOverview />
		</StyledFiles>
	);
};

export default FilesContainer(Files as React.FC);
