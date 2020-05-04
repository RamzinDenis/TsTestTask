import React, { useRef, useState, useEffect } from "react";
import { Props } from "./List";
import { connect } from "react-redux";

export default (WrappedComponent: React.FC<Props>) => {
	const HocComponent: React.FC<Props> = ({ ...props }) => {
		const containerRef = useRef(null as any);

		const [currentItem, setCurrentItem] = useState(0);

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === "ArrowDown") {
				event.preventDefault();
				if (currentItem >= props.lists!.length) return setCurrentItem(1);
				setCurrentItem(currentItem + 1);
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				if (currentItem <= 0) return setCurrentItem(props.lists!.length);
				setCurrentItem(currentItem - 1);
			} else if (event.key === "Enter" && currentItem) {
				props.history.push(`${props.match.path}/${currentItem}`);
			}
			containerRef.current?.focus();
		};
		useEffect(() => {
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		});
		const newProps = { currentItem, setCurrentItem, containerRef };

		return (
			<WrappedComponent {...props} {...(newProps as React.PropsWithRef<any>)} />
		);
	};

	return connect()(HocComponent);
};
