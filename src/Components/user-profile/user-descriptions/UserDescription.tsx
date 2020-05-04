import React from "react";
import { Descriptions, Typography } from "antd";
import { CloseSquareOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { StyledUserTitle, StyledUserWrapper, Center } from "./StyledUserTitle";
import UserAddress from "../user-address";
import UserCompany from "../user-company";
import { connect } from "react-redux";
import { updateUserProfile } from "../../../redux/actions";
import { UserData } from "../../../fixtures";
import UserDescriptionContainer from "./UserDescriptionContainer";

export interface Props {
	user: UserData;
	updateUserProfile: Function;
	state?: UserData;
	setState?: React.Dispatch<React.SetStateAction<UserData>>;
	handleChange?: (value: string, propertyName: string) => void;
}

const UserDescription: React.FC<Props> = ({
	state,
	setState,
	handleChange,
}) => {
	const { Paragraph } = Typography;

	const {
		name,
		phone,
		city,
		gender,
		address,
		age,
		email,
		haveChildren,
		married,
		website,
		username,
		company,
	} = state!;
	return (
		<>
			<Descriptions
				title={
					<h3>
						Информация о пользователе <strong>{name}</strong>
					</h3>
				}
				bordered
				layout="vertical"
				size="middle"
				className="descriptions"
				column={4}
			>
				<Descriptions.Item label={<StyledUserTitle>ФИО</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "name") }}
					>
						{name}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Телефон</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "phone") }}
					>
						{phone}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Город</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "city") }}
					>
						{city}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Пол</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "gender") }}
					>
						{gender}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Адрес</StyledUserTitle>}>
					<UserAddress
						address={address}
						setState={
							setState as React.Dispatch<React.SetStateAction<UserData>>
						}
					/>
				</Descriptions.Item>
				<Descriptions.Item
					label={<StyledUserTitle>Электронная почта</StyledUserTitle>}
				>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "email") }}
					>
						{email}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item
					label={
						<Center>
							<StyledUserTitle>Дети</StyledUserTitle>
						</Center>
					}
				>
					<Paragraph strong>
						{(haveChildren && <Center>{haveChildren}</Center>) || (
							<StyledUserWrapper>
								<CloseSquareOutlined style={{ marginTop: "10px" }} />
							</StyledUserWrapper>
						)}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item
					label={<StyledUserTitle>Семейное положение</StyledUserTitle>}
				>
					<StyledUserWrapper>
						{married ? <CheckSquareOutlined /> : <CloseSquareOutlined />}
					</StyledUserWrapper>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Компания</StyledUserTitle>}>
					<UserCompany
						setState={
							setState as React.Dispatch<React.SetStateAction<UserData>>
						}
						company={company}
					/>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Возраст</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "age") }}
					>
						{age}
					</Paragraph>
				</Descriptions.Item>

				<Descriptions.Item
					label={<StyledUserTitle>Имя пользователя</StyledUserTitle>}
				>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "username") }}
					>
						{username}
					</Paragraph>
				</Descriptions.Item>
				<Descriptions.Item label={<StyledUserTitle>Веб-сайт</StyledUserTitle>}>
					<Paragraph
						strong
						editable={{ onChange: value => handleChange!(value, "website") }}
					>
						{website}
					</Paragraph>
				</Descriptions.Item>
			</Descriptions>
		</>
	);
};

export default connect(null, { updateUserProfile })(
	UserDescriptionContainer(UserDescription as React.FC)
);
