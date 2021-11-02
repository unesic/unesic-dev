import { mode } from "@chakra-ui/theme-tools";

export const Button = {
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
		colorMode: (props) => ({
			borderRadius: "9999px",
			p: 1,
			width: 16,
			height: "auto",
			bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
			fontSize: "xl",
			justifyContent: "start",
		}),
	},
	defaultProps: {
		variant: "app",
	},
};
