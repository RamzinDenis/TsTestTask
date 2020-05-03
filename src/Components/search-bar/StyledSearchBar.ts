import styled from "styled-components";

export const StyledSearchBar = styled.div`
	flex-basis: 25%;
	padding: 20px 25px;
	box-shadow: 0px 2px 12px -4px rgba(0, 0, 0, 0.75);
	height: fit-content;

	.ageFrom,
	.ageTo {
		margin-right: 5px;
		max-width: 60px;
	}
`;

export const AgeInput = styled.div`
	display: flex;
`;

export const ButtonsContainer = styled.div`
	margin: 0 auto;
	width: fit-content;

	button {
		margin-right: 5px;
	}
`;
