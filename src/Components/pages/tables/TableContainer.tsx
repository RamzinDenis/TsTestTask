import React, { createRef, useState, useEffect } from "react";

export default (WrappedComponent: React.FC) => {
	const HocComponent = ({ ...props }) => {
		const searchBarRef = createRef() as any;
		const [selectedRow, setSelectedRow] = useState("" as any);
		const [id, setId] = useState(0);
		const [visible, setVisible] = useState(false);
		const handleKeyAction = (event: KeyboardEvent) => {
			if (event.key === "F9") {
				props.history.push(`Пользователи/${id}`);
			} else if (event.key === "F4") {
				setVisible(true);
			} else if (event.key === "ArrowDown") {
				event.preventDefault();
				if (+selectedRow >= props.data.length - 1) return setSelectedRow(0);

				setSelectedRow(typeof selectedRow === "string" ? 1 : selectedRow + 1);
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				if (+selectedRow <= 0) return setSelectedRow(props.data.length - 1);
				setSelectedRow(
					typeof selectedRow === "string" ? props.data.length : selectedRow - 1
				);
			}
		};
		useEffect((): void => {
			props.loadUsers();
			searchBarRef.current?.focus(); // eslint-disable-next-line
		}, [searchBarRef]);

		useEffect(() => {}, []);

		const newProps = {
			visible,
			setVisible,
			selectedRow,
			setSelectedRow,
			handleKeyAction,
			searchBarRef,
			setId,
		};
		return <WrappedComponent {...props} {...(newProps as any)} />;
	};

	return HocComponent;
};

// if (event.code === "ArrowDown") {
// 	event.preventDefault();
// 	if (currentItem >= props.lists!.length) return setCurrentItem(1);
// 	setCurrentItem(currentItem + 1);
// } else if (event.key === "ArrowUp") {
// 	event.preventDefault();
// 	if (currentItem <= 0) return setCurrentItem(props.lists!.length);
// 	setCurrentItem(currentItem - 1);
