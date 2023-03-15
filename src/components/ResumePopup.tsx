/**
 * Base
 */
import React, { useContext, useMemo, useRef } from "react";

/**
 * Utilities
 */
import { v4 as uuidv4 } from "uuid";
import { LanguageContext } from "lib/LanguageContext";
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import {
	Heading,
	Text,
	Button,
	ButtonGroup,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Link,
	Box,
	useColorMode,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface ResumePopupProps {}

export const ResumePopup: React.FC<ResumePopupProps> = () => {
	const ref = useRef() as React.RefObject<any>;

	const { language } = useContext(LanguageContext);
	const _t = useTranslation("header");
	const { colorMode } = useColorMode();

	const defaultResumeURL = useMemo(() => {
		const lang = language.toUpperCase();
		const modeSplit = colorMode.split("");
		const mode = [modeSplit[0].toUpperCase(), ...modeSplit.splice(1)].join("");
		return `/resume/Uros-Nesic-Resume-${lang}-${mode}.pdf`;
	}, [language, colorMode]);

	return (
		<Popover
			placement="bottom"
			trigger="hover"
			initialFocusRef={ref}
			closeOnBlur
		>
			<PopoverTrigger>
				<Button as="a" target="_blank" href={defaultResumeURL}>
					{_t.resume.buttons.cta}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				py="2"
				w="sm"
				bg={`app.${colorMode}.dusk.300`}
				borderColor={`app.${colorMode}.dusk.200`}
			>
				<PopoverHeader fontWeight="bold" border="0">
					<Heading variant="h6" as="h5">
						{_t.resume.head}
					</Heading>
				</PopoverHeader>
				<PopoverArrow
					bg={`app.${colorMode}.dusk.300`}
					borderColor={`app.${colorMode}.dusk.200`}
				/>
				<PopoverCloseButton />
				<PopoverBody>
					{_t.resume.copy.map((t) => (
						<Text key={uuidv4()} fontSize="md">
							{t}
						</Text>
					))}
					{_t.resume.variants.map((v) => (
						<Box key={uuidv4()} mt="6">
							<Heading variant="h7" as="h6">
								{v.head}
							</Heading>
							<Link href={v.dark.url} isExternal variant="simple-link">
								{v.dark.text} <ExternalLink />
							</Link>
							<Link href={v.light.url} isExternal variant="simple-link">
								{v.light.text} <ExternalLink />
							</Link>
							<Link href={v.print.url} isExternal variant="simple-link">
								{v.print.text} <ExternalLink />
							</Link>
						</Box>
					))}
				</PopoverBody>
				<PopoverFooter border="0" mt="2">
					<ButtonGroup size="sm" spacing="4">
						<Button
							as="a"
							target="_blank"
							href={defaultResumeURL}
							aria-label="Download resume"
							ref={ref}
						>
							{_t.resume.buttons.default}
						</Button>
						<Button as="a" href="/resume/Uros-Nesic-Resume-Pack.zip" download>
							{_t.resume.buttons.pack}
						</Button>
					</ButtonGroup>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	);
};

const ExternalLink: React.FC = () => (
	<Icon
		icon="feather:external-link"
		style={{ display: "inline", marginLeft: "0.25rem" }}
	/>
);
