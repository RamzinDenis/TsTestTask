import React, { useState, useEffect } from "react";
import { Props } from "./UserDescription";

export default (WrappedComponent: React.FC) => {
	const HocComponent: React.FC<Props> = ({ ...props }) => {
		const [state, setState] = useState(props.user);
		const handleChange = (value: string, propertyName: string) => {
			setState({
				...state,
				[propertyName]: value,
			});
		};
		useEffect(() => {
			props.updateUserProfile(state);
		}, [state]);
		const newProps = { state, setState, handleChange };
		return <WrappedComponent {...props} {...newProps} />;
	};

	return HocComponent;
};
