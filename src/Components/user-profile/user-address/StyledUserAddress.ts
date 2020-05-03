import styled from "styled-components";

export const StyledUserCompoundWrapper = styled.div`
	.ant-typography {
		display: inline-block;
		margin-left: 2px;
	}
	.ant-typography-edit {
		margin-right: 2px;
		opacity: 0 !important;
	}
	.ant-typography:hover {
		.ant-typography-edit {
			opacity: 1 !important;
		}
	}
`;
