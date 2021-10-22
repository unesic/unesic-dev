import { mode } from "@chakra-ui/theme-tools";

export const Tooltip = {
	baseStyle: (props) => ({
		fontSize: "sm",
		fontFamily: "mono",
		bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
		color: mode("app.light.dawn.200", "app.dark.dawn.200")(props),
	}),
};
