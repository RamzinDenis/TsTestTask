import React from "react";
import { StyledUserCompoundWrapper } from "../user-address/StyledUserAddress";
import { Typography } from "antd";

interface Props {
	company: {
		name: string;
		catchPhrase: string;
	};
	setState: React.SetStateAction<Function>;
}

const UserCompany: React.FC<Props> = ({ company, setState }) => {
	const changeCompanyProp = (value: string, propName: string): void => {
		setState((prev: React.ComponentState) => ({
			...prev,
			company: { ...prev.company, [propName]: value },
		}));
	};
	const { Paragraph } = Typography;

	return (
		<StyledUserCompoundWrapper>
			<div>
				Название :
				<Paragraph
					strong
					editable={{
						onChange: value => changeCompanyProp(value, "name"),
					}}
				>
					{company.name}
				</Paragraph>
				Слоган Компании :
				<Paragraph
					strong
					editable={{
						onChange: value => changeCompanyProp(value, "catchPhrase"),
					}}
				>
					{company.catchPhrase}
				</Paragraph>
			</div>
		</StyledUserCompoundWrapper>
	);
};

export default UserCompany;
