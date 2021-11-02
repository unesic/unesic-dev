import { mode } from "@chakra-ui/theme-tools";

export const Heading = {
	variants: {
		h1: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["5xl", "5xl", "6xl", "6xl", "7xl", "7xl"],
			"& + h2": {
				color: mode("app.light.dawn.200", "app.dark.dawn.200")(props),
			},
		}),
		h2: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["4xl", "4xl", "5xl", "5xl", "6xl", "6xl"],
		}),
		h3: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["3xl", "3xl", "4xl", "4xl", "5xl", "5xl"],
		}),
		h4: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["2xl", "2xl", "3xl", "3xl", "4xl", "4xl"],
		}),
		h5: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["xl", "xl", "2xl", "2xl", "3xl", "3xl"],
		}),
		h6: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			fontSize: ["lg", "lg", "xl", "xl", "2xl", "2xl"],
		}),
	},
};
