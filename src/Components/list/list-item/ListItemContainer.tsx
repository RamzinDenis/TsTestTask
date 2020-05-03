import React from "react";
import { Props } from "./ListItem";

export default (WrappedComponent: React.FC<Props>) => {
	const HocComponent: React.FC<Props> = ({ ...props }) => {
		const handleMouseOver = () => {
			props.setCurrentItem((prev: number) => props.list.id);
		};
		const handleMouseOut = () => {
			props.setCurrentItem((prev: number) => {
				if (!prev) return;
				return 0;
			});
		};
		const handleDblClick = () => {
			props.history.push(`${props.match.path}/${props.list.id}`);
		};
		const newProps = { handleMouseOut, handleMouseOver, handleDblClick };

		return <WrappedComponent {...props} {...newProps} />;
	};

	return HocComponent;
};
