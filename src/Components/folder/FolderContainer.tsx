import React, { useState, useEffect } from "react";
import { PropsFolder } from "./Folder";

export interface Props extends PropsFolder {
	currentItem: React.ComponentState;
	index: number;
	setCurrentArrayLength: React.Dispatch<React.SetStateAction<number>>;
	initialLength: number;
	currentArrayLength: number;
}

export default (WrappedComponent: React.FC) => {
	const HocComponent: React.FC<Props> = ({ ...props }) => {
		const [visible, setVisible] = useState(false);
		const {
			index,
			currentArrayLength,
			currentItem,
			setCurrentArrayLength,
			setCurrentItem,
			initialLength,
			files,
			enterPressedOnItemIndex,
			setEnterPressed,
		} = props;

		let dataIndex: any;
		if (!index) {
			dataIndex = index;
		} else if (index && visible) {
			dataIndex = index + currentArrayLength - initialLength - files.length;
		} else if (index && !visible) {
			dataIndex = index + currentArrayLength - initialLength;
		}
		const handleMouseOver = () => {
			setCurrentItem(dataIndex);
		};

		const handleMouseOut = () => {
			setCurrentItem("" as any);
		};

		const getClassName = () => {
			if (currentItem === dataIndex) return "active";
		};

		const getFileClassName = (fileIndex: number) => {
			const newFileIndex =
				!dataIndex && !index ? fileIndex + 1 : fileIndex + 1 + dataIndex;
			if (visible) {
				if (newFileIndex === currentItem)
					return {
						className: "active",
						newFileIndex,
					};
			} else
				return {
					className: "",
					newFileIndex,
				};
		};

		useEffect(() => {
			visible
				? setCurrentArrayLength((prev: number) => prev + files.length)
				: setCurrentArrayLength((prev: number) =>
						prev === initialLength ? prev : prev - files.length
				  ); // eslint-disable-next-line
		}, [visible]);

		useEffect(() => {
			if (enterPressedOnItemIndex === dataIndex) {
				setVisible(prev => !prev);
				setEnterPressed(-5);
			} // eslint-disable-next-line
		}, [enterPressedOnItemIndex]);
		const newProps = {
			setVisible,
			dataIndex,
			getFileClassName,
			getClassName,
			visible,
			handleMouseOut,
			handleMouseOver,
		};
		return <WrappedComponent {...props} {...newProps} />;
	};

	return HocComponent;
};
