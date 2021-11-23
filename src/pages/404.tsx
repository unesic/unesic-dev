/**
 * Base
 */
import React, { useRef } from "react";
/**
 * Utilities
 */
import { LanguageProvider } from "lib/LanguageContext";

/**
 * Components
 */
import { SEO } from "components/SEO";
import { Header } from "components/Header";
import { Ribbon } from "components/Ribbon";

/**
 * Chakra UI
 */
import {
	Container,
	Heading,
	Text,
	Button,
	useColorMode,
} from "@chakra-ui/react";

const NotFoundPage: React.FC = () => {
	const { colorMode } = useColorMode();
	const header = useRef() as React.MutableRefObject<HTMLDivElement>;

	return (
		<main style={{ overflowX: "hidden" }}>
			<SEO />
			<LanguageProvider>
				<Header ref={header} />
				<Container
					d="flex"
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					maxW={[
						"100%",
						"container.sm",
						"container.md",
						"container.lg",
						"container.xl",
						"container.xl",
					]}
					py="40"
				>
					<Heading
						variant="h1"
						as="h1"
						fontSize="9xl"
						color={`app.${colorMode}.accent.solid`}
					>
						404
					</Heading>
					<Text
						fontFamily="mono"
						fontSize="5xl"
						color={`app.${colorMode}.dawn.200`}
					>
						Not found.
					</Text>
					<Button as="a" href="/" mt="8">
						Back to home
					</Button>
				</Container>

				<Ribbon />
			</LanguageProvider>
		</main>
	);
};

export default NotFoundPage;
