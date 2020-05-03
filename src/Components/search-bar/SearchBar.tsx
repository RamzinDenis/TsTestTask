import React from "react";
import { StyledSearchBar, AgeInput, ButtonsContainer } from "./StyledSearchBar";
import { Form, Input, Checkbox, Button, Typography, InputNumber } from "antd";
import { connect } from "react-redux";
import { searchUsers } from "../../redux/actions";

type SearchBarProps = {
	searchUsers: Function;
	inputRef: React.Ref<object>;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchUsers, inputRef }) => {
	const [form] = Form.useForm();

	const handleSubmit = (values: {}) => {
		searchUsers(values);
		form.resetFields();
	};
	return (
		<StyledSearchBar>
			<Typography.Title level={3} style={{ textAlign: "center" }}>
				Найти
			</Typography.Title>
			<Form onFinish={handleSubmit} form={form}>
				<Form.Item
					label="Есть дети"
					name="haveChildren"
					valuePropName="checked"
				>
					<Checkbox />
				</Form.Item>
				<Form.Item
					label="Состоит в Браке"
					name="married"
					valuePropName="checked"
				>
					<Checkbox />
				</Form.Item>
				<Form.Item label="Введите город" name="city">
					<Input.Search ref={inputRef as any} />
				</Form.Item>
				<AgeInput>
					<Form.Item label="Возраст" name="ageFrom">
						<InputNumber
							min={15}
							max={90}
							className="ageFrom"
							placeholder={"От"}
						/>
					</Form.Item>
					<Form.Item name="ageTo">
						<InputNumber
							min={15}
							max={90}
							className="ageTo"
							placeholder={"До"}
						/>
					</Form.Item>
				</AgeInput>
				<ButtonsContainer>
					<Button htmlType="submit">Поиск</Button>
					<Button onClick={() => form.resetFields()}>Очистить</Button>
				</ButtonsContainer>
			</Form>
		</StyledSearchBar>
	);
};

export default connect(null, { searchUsers })(SearchBar);
