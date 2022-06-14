import { createGlobalStyle, DefaultTheme } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`
export const lightTheme: DefaultTheme = {
	body: "#EDEDED",
	text: "#2B2B2B",
	colors: {
		main: "#d1345b",
		shadowMain: "#9d2744",
		btnText: "#EDEDED",
		dark: "#171717",
	},
}

export const darkTheme: DefaultTheme = {
	body: "#2B2B2B",
	text: "#EDEDED",
	colors: {
		main: "#d1345b",
		shadowMain: "#9d2744",
		btnText: "#EDEDED",
		dark: "#171717",
	},
}
