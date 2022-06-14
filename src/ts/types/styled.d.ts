// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		body: string
		text: string
		colors: {
			main: string
			shadowMain: string
			btnText: string
			dark: string
		}
	}
}
