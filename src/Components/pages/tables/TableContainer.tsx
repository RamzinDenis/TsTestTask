import React, { createRef, useState, useEffect } from "react";

export default (WrappedComponent: React.FC) => {
	const HocComponent = ({ ...props }) => {
		const searchBarRef = createRef() as any;
		const [selectedRow, setSelectedRow] = useState("");
		const [visible, setVisible] = useState(false);
		const handleKeyAction = (event: KeyboardEvent) => {
			if (event.key === "F9" && selectedRow) {
				props.history.push(`Пользователи/${selectedRow}`);
			} else if (event.key === "F4" && selectedRow) {
				setVisible(true);
			}
		};
		useEffect((): void => {
			props.loadUsers();
			searchBarRef.current?.focus();
		}, [searchBarRef]);

		const newProps = {
			visible,
			setVisible,
			selectedRow,
			setSelectedRow,
			handleKeyAction,
			searchBarRef,
		};
		return <WrappedComponent {...props} {...(newProps as any)} />;
	};

	return HocComponent;
};
