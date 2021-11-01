import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { Text, Button, Link } from "@chakra-ui/react";

interface MenuItemProps {
	href?: string;
	char: number;
	on: boolean;
	isBtn?: boolean;
	children: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
	href,
	char,
	on,
	isBtn,
	children,
}) => {
	const text = useMemo(() => {
		const split = children.split("");

		const head = (
			<Text key={uuidv4()} as="span">
				{[...split].splice(0, char).join("")}
			</Text>
		);

		const highlight = (
			<Text key={uuidv4()} as="span" variant={`highlight-${on ? "on" : "off"}`}>
				{split[char]}
			</Text>
		);

		const tail = (
			<Text key={uuidv4()} as="span">
				{[...split].splice(char + 1).join("")}
			</Text>
		);

		return [head, highlight, tail];
	}, [on]);

	return isBtn ? (
		<Button as="a" href={href ?? "#"}>
			<Text as="span">{text}</Text>
		</Button>
	) : (
		<Link href={href ?? "#"} variant="nav">
			{text}
		</Link>
	);
};
