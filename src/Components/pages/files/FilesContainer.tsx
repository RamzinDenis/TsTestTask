import React, { useState, useEffect } from "react";
import { folderData } from "../../../fixtures";
import { Props } from "./Files";
export default (WrappedComponent: React.FC) => {
	const HocComponent: React.FC<Props> = ({ ...props }) => {
		const [currentItem, setCurrentItem] = useState("" as React.ComponentState);
		const [currentArrayLength, setCurrentArrayLength] = useState(
			folderData.length
		);
		const [enterPressedOnItemIndex, setEnterPressed] = useState(
			"" as React.ComponentState
		);
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === "ArrowUp") {
				event.preventDefault();

				if (currentItem <= 0) return setCurrentItem(currentArrayLength - 1);
				setCurrentItem((prev: string | number) =>
					typeof currentItem === "string" ? 0 : (prev as number) - 1
				);
			} else if (event.key === "ArrowDown") {
				event.preventDefault();

				if (currentItem >= currentArrayLength - 1) return setCurrentItem(0);
				setCurrentItem((prev: string | number) =>
					typeof currentItem === "string" ? 0 : (prev as number) + 1
				);
			} else if (event.key === "Enter") {
				setEnterPressed(currentItem);
			}
		};

		useEffect(() => {
			window.addEventListener("keydown", handleKeydown);
			return () => {
				window.removeEventListener("keydown", handleKeydown);
			};
		});
		const newProps = {
			currentItem,
			setCurrentItem,
			setCurrentArrayLength,
			currentArrayLength,
			enterPressedOnItemIndex,
			setEnterPressed,
			folderData,
		};
		return <WrappedComponent {...props} {...newProps} />;
	};

	return HocComponent;
};
