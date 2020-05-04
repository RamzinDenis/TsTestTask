import React from "react";
import { StyledFolder, StyledFolderContainer } from "./StyledFolder";
import { FolderOutlined } from "@ant-design/icons";
import FileComponent from "./file-component";
import { FolderData } from "../../fixtures";
import FolderContainer from "./FolderContainer";

export interface PropsFolder extends FolderData {
	name: string;
	setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
	setEnterPressed: React.Dispatch<React.SetStateAction<number>>;
	visible?: boolean;
	handleMouseOut?: () => void;
	handleMouseOver?: () => void;
	getClassName?: () => "active" | undefined;
	setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
	dataIndex?: number;
	getFileClassName?: (
		fileIndex: number
	) =>
		| {
				className: string;
				newFileIndex: number;
		  }
		| undefined;
	enterPressedOnItemIndex: number;
}

const Folder: React.FC<PropsFolder> = ({
	name,
	files,
	enterPressedOnItemIndex,
	setCurrentItem,
	getClassName,
	getFileClassName,
	visible,
	handleMouseOut,
	handleMouseOver,
	setVisible,
	dataIndex,
}) => {
	return (
		<StyledFolderContainer>
			<StyledFolder
				onClick={() => setVisible!(prev => !prev)}
				className={getClassName!()}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			>
				<FolderOutlined /> {name}
			</StyledFolder>
			{visible &&
				files.map((file, fileIndex) => (
					<FileComponent
						{...file}
						key={file.id}
						fileData={getFileClassName!(fileIndex)}
						enterPressedOnItemIndex={enterPressedOnItemIndex}
						setCurrentItem={setCurrentItem}
						dataIndex={dataIndex!}
						index={fileIndex}
					/>
				))}
		</StyledFolderContainer>
	);
};

export default FolderContainer(Folder as React.FC);
