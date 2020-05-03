import React from "react";
import { StyledUserModal } from "./StyledUserModal";
import { Modal } from "antd";
import { connect, RootStateOrAny } from "react-redux";
import { getSelectedUserById } from "../../redux/selectors";

// Пофиксить

interface Props extends React.Props<any> {
	id: string | null;
	setVisible: React.SetStateAction<Function>;
	visible: boolean;
}

const UserModal: React.FC<any> = ({ visible, setVisible, user }) => {
	if (!visible) return null;
	console.log(user);
	const handleModal = () => setVisible!((prevState: boolean) => false);
	return (
		<StyledUserModal>
			<Modal
				title={
					<h4 className="modal__title">
						Краткая информация о <strong>{user.name}</strong>
					</h4>
				}
				visible={visible}
				onOk={handleModal}
				onCancel={handleModal}
			>
				<span className="modal__text">
					Пользователь <strong>{user.name}</strong>, работает в
					<strong> {user.company.name}</strong>, <br />
					пол :<strong> {user.gender}</strong>, возраст :
					<strong> {user.age}</strong>
					<br />
					<span className="modal__description">
						Дабл клик или F8 по выбранной строке для более детальной информации
					</span>
				</span>
			</Modal>
		</StyledUserModal>
	);
};

export default connect<{} | null, {} | null, Props>(
	(state: RootStateOrAny, ownProps: Props) => ({
		user: getSelectedUserById(state, ownProps),
	})
)(UserModal);
