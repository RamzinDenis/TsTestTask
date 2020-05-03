import React from "react";
import { StyledUserCompoundWrapper } from "./StyledUserAddress";
import { Typography } from "antd";

interface Props {
	address: {
		street: string;
		strN: string;
		zipcode: string;
	};
	setState: React.SetStateAction<Function>;
}

const UserAddress: React.FC<Props> = ({ address, setState }) => {
	const { street, strN, zipcode } = address;
	const { Paragraph } = Typography;
	const changeAddressProp = (value: string, propName: string): void => {
		setState((prev: React.ComponentState) => ({
			...prev,
			address: { ...prev.address, [propName]: value },
		}));
	};
	return (
		<StyledUserCompoundWrapper>
			<div>
				Улица :
				<Paragraph
					strong
					editable={{
						onChange: value => changeAddressProp(value, "street"),
					}}
				>
					{street}
				</Paragraph>
				№ :
				<Paragraph
					strong
					editable={{
						onChange: value => changeAddressProp(value, "strN"),
					}}
				>
					{strN}
				</Paragraph>
				Почтовый индекс :
				<Paragraph
					strong
					editable={{
						onChange: value => changeAddressProp(value, "zipcode"),
					}}
				>
					{zipcode}
				</Paragraph>
			</div>
		</StyledUserCompoundWrapper>
	);
};

export default UserAddress;
