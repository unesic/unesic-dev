/**
 * Base
 */
import React, { useContext, useMemo } from "react";

/**
 * Utilities and types
 */
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import {
	Job as IJob,
	Experience as IExperience,
} from "lib/types/language.types";
import { LanguageContext, Language as ELanguage } from "lib/LanguageContext";

/**
 * Chakra UI
 */
import {
	Box,
	List,
	ListItem,
	Text,
	Link,
	useColorMode,
} from "@chakra-ui/react";

type JobProps = IJob & Pick<IExperience, "labels">;

export const Job: React.FC<JobProps> = ({
	title,
	date,
	company,
	items,
	labels,
}) => {
	const { colorMode } = useColorMode();
	const { language } = useContext(LanguageContext);

	const formattedDate = useMemo(() => {
		const { from, to } = date;
		const { year, month } = labels;

		const now = Date.now();
		const format = "MMMM, YYYY";

		const fromFrmt = dayjs(from).format(format);
		const toValid = dayjs(to).isValid();
		const toFrmt = toValid ? dayjs(to).format(format) : to;

		const yearDiff = dayjs(toValid ? dayjs(to) : now).diff(from, "years");
		const monthDiff = dayjs(toValid ? dayjs(to) : now)
			.subtract(yearDiff, "years")
			.diff(from, "months");

		const yearLabel =
			language === ELanguage.EN
				? year[yearDiff === 1 ? 0 : 1]
				: year[[2, 3, 4].includes(yearDiff) ? 1 : 0];
		const monthLabel =
			language === ELanguage.EN
				? month[monthDiff === 1 ? 0 : 1]
				: month[monthDiff === 1 ? 0 : [2, 3, 4].includes(monthDiff) ? 1 : 2];

		const yearsFrmt = yearDiff ? `${yearDiff} ${yearLabel}` : "";
		const monthsFrmt = monthDiff ? `${monthDiff} ${monthLabel}` : "";

		const period = `${yearsFrmt} ${monthsFrmt}`.trim();

		return `${fromFrmt} - ${toFrmt} (${period})`;
	}, [date]);

	return (
		<Box>
			<Text variant="light" mt="4">
				{title}{" "}
				<Text as="span" color={`app.${colorMode}.accent.solid`}>
					@{" "}
					<Link variant="external" href={company.url} isExternal>
						{company.name}
					</Link>
				</Text>
			</Text>
			<Text variant="tech">{formattedDate}</Text>
			<List spacing="2" mt="4" className="tech-list">
				{items.map((item) => (
					<ListItem key={uuidv4()}>{item}</ListItem>
				))}
			</List>
		</Box>
	);
};
