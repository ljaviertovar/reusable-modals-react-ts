import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.dark};
	padding: 1rem;
`
export const HeaderContainer = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: center;
`

export const ButtonSecondary = styled.button`
	padding: 0.2rem;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.main};
	border-radius: 3px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadowMain};
	}
`
