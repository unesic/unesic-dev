import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

const theme = {
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	fonts: {
		heading: "Poppins",
		body: "Open Sans",
		mono: "Source Code Pro",
	},
	colors: {
		app: {
			light: {
				dusk: {
					100: "#BED0F4",
					200: "#D5E0F6",
					300: "#E9EFFB",
				},
				dawn: {
					100: "#1F242E",
					200: "#242E42",
					300: "#263759",
				},
				accent: {
					solid: "#0586C7",
					clear: "#0586C715",
				},
				white: "#17191C",
			},
			dark: {
				dusk: {
					100: "#1F2C47",
					200: "#192234",
					300: "#121721",
				},
				dawn: {
					100: "#BAC6DE",
					200: "#9CABC9",
					300: "#8091B3",
				},
				accent: {
					solid: "#00EAD0",
					clear: "#00EAD015",
				},
				white: "#E9EFFB",
			},
		},
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode("app.light.dusk.300", "app.dark.dusk.300")(props),
				color: mode("app.light.dawn.300", "app.dark.dawn.300")(props),
				fontSize: "xl",
			},
			li: {
				fontSize: "md",
				fontFamily: "mono",
				color: mode("app.light.dawn.300", "app.dark.dawn.300")(props),
				"&::before": {
					bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
					color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
					content: "'$'",
					display: "inline-block",
					mr: 2,
					px: 1,
					fontWeight: "bold",
				},
			},
		}),
	},
	components: {
		Heading: {
			variants: {
				h1: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "7xl",
					"& + h2": {
						color: mode("app.light.dawn.200", "app.dark.dawn.200")(props),
					},
				}),
				h2: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "6xl",
				}),
				h3: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "5xl",
				}),
				h4: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "4xl",
				}),
				h5: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "3xl",
				}),
				h6: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					fontSize: "2xl",
				}),
			},
		},
		Text: {
			variants: {
				tech: {
					fontFamily: "mono",
					fontSize: "md",
				},
				light: (props) => ({
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
				}),
			},
		},
		Code: {
			variants: {
				sub: (props) => ({
					bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
					color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
					py: 1,
					px: 2,
					fontSize: "md",
					fontWeight: "bold",
				}),
			},
			defaultProps: {
				variant: "sub",
			},
		},
		Kbd: {},
		List: {},
		ListItem: {},
		Link: {
			baseStyle: (props) => ({
				position: "relative",
				display: "inline-block",
				textDecoration: "none !important",
				"&::after": {
					content: "''",
					position: "relative",
					bottom: "0.2rem",
					display: "block",
					width: "0",
					height: "1px",
					transition: "width 0.1s ease-in-out 0s",
					bg: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
				},
				"&:hover::after": {
					width: "100%",
				},
			}),
			variants: {
				icon: (props) => ({
					p: "3",
					color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
					"&:hover": {
						color: mode(
							"app.light.accent.solid",
							"app.dark.accent.solid"
						)(props),
					},
					"&::after": {
						display: "none !important",
					},
				}),
			},
		},
		Button: {
			variants: {
				app: (props) => ({
					height: 12,
					border: "2px solid",
					borderColor: mode(
						"app.light.accent.solid",
						"app.dark.accent.solid"
					)(props),
					fontFamily: "mono",
					color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
					"&:hover": {
						bg: mode("app.light.accent.clear", "app.dark.accent.clear")(props),
					},
				}),
			},
			defaultProps: {
				variant: "app",
			},
		},
	},
};

export default extendTheme(
	theme,
	withDefaultColorScheme({ colorScheme: "app" })
);
