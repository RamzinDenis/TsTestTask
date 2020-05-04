import styled from "styled-components";

export const StyledTables = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin: 20px;
	padding: 20px 20px;
	/* border: 1px solid #d3d3d3; */

	.tables {
		flex-basis: 60%;
		height: fit-content;
		box-shadow: 0px 2px 12px -4px rgba(0, 0, 0, 0.75);
		td,
		th {
			cursor: pointer;
		}
	}
	.active {
		background-color: #fafafa;
	}
	.ant-table-tbody tr.ant-table-row:hover td {
		background: none;
	}
`;
