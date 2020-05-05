import React, { createRef, useState, useEffect } from "react";

export default (WrappedComponent: React.FC) => {
	const HocComponent = ({ ...props }) => {
		const searchBarRef = createRef() as any;
		const [selectedRow, setSelectedRow] = useState("" as any);
		const [currentId, setId] = useState(0);
		const [visible, setVisible] = useState(false);
		const handleKeyAction = (event: KeyboardEvent) => {
			if (event.key === "F9" && props.data.length) {
				props.history.push(`Пользователи/${currentId}`);
			} else if (event.key === "F4" && props.data.length) {
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
		}, [searchBarRef, selectedRow]);

		const newProps = {
			visible,
			setVisible,
			selectedRow,
			setSelectedRow,
			handleKeyAction,
			searchBarRef,
			setId,
			currentId,
		};
		return <WrappedComponent {...props} {...(newProps as any)} />;
	};

	return HocComponent;
};
