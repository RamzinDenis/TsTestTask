import React, { useEffect } from "react";
import { StyledFile } from "./StyledFileComponent";
import { FileOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { loadSelectedFile } from "../../../redux/actions";

interface Props {
	name: string;
	id: string;
	loadSelectedFile: (id: string) => void;
	fileData?: {
		className?: string;
		newFileIndex?: number;
	};
	enterPressedOnItemIndex: number;
	setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
	index: number;
	dataIndex: number;
}

const FileComponent: React.FC<Props> = ({
	name,
	loadSelectedFile,
	id,
	fileData,
	enterPressedOnItemIndex,
	setCurrentItem,
	dataIndex,
	index,
}) => {
	const handleMouseOver = () => {
		const newFileIndex = !dataIndex ? index + 1 : index || 1 + dataIndex;
		setCurrentItem(newFileIndex);
	};

	useEffect(() => {
		if (
			fileData?.className &&
			enterPressedOnItemIndex === fileData?.newFileIndex
		)
			loadSelectedFile(id); // eslint-disable-next-line
	}, [enterPressedOnItemIndex]);
	return (
		<StyledFile
			onClick={() => loadSelectedFile(id)}
			className={fileData!?.className}
			onMouseOver={handleMouseOver}
		>
			<FileOutlined /> {name}
		</StyledFile>
	);
};

export default connect(null, { loadSelectedFile })(FileComponent);
