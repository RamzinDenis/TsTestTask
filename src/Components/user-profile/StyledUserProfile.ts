import styled from "styled-components";

export const StyledUserProfile = styled.div`
	margin-top: 40px;
	.ant-descriptions-title {
		text-align: center;
		font-family: "Inter", sans-serif;
		text-align: center;
		font-size: 22px;
		font-weight: 500;
	}
	.ant-typography-edit {
		font-size: 15px;
		margin-left: 5px;
		opacity: 0;
	}
	.ant-descriptions-item-content:hover {
		.ant-typography-edit {
			opacity: 1;
		}
	}
	.close-btn {
		position: absolute;
		right: 30px;
		top: 20px;
		font-size: 25px;
	}
`;
