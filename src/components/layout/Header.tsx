import * as S from "./styles"

interface Props {
	isDarkTheme: boolean
	setTheme: (value: string) => void
}

const Header = ({ isDarkTheme, setTheme }: Props) => {
	const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")

	return (
		<S.Header>
			<S.HeaderContainer>
				<S.ButtonSecondary onClick={toggleTheme}>
					{isDarkTheme ? (
						<span aria-label='Light mode' role='img'>
							🌞
						</span>
					) : (
						<span aria-label='Dark mode' role='img'>
							🌜
						</span>
					)}
				</S.ButtonSecondary>
			</S.HeaderContainer>
		</S.Header>
	)
}

export default Header
