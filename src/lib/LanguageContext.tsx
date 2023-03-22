import React, { createContext, useCallback, useEffect, useState } from "react";
import { LS_LANG } from "./constants";

export enum Language {
	SR = "sr",
	EN = "en",
}

interface LanguageState {
	language: Language;
	setLanguage: React.Dispatch<React.SetStateAction<Language>>;
	toggleLanguage: () => void;
}

const defaultState: LanguageState = {
	language: Language.EN,
	setLanguage: () => {},
	toggleLanguage: () => {},
};

export const LanguageContext = createContext(defaultState);

export const LanguageProvider: React.FC = ({ children }) => {
	const [language, setLanguage] = useState<Language>(Language.EN);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const lsLang = window.localStorage.getItem(LS_LANG) as Language | null;
		const lsLangValid = lsLang && Object.values(Language).includes(lsLang);

		const browserLang = navigator.language;
		const browserLangSR = browserLang === Language.SR;
		const fallbackLang = browserLangSR ? browserLang : Language.EN;

		setLanguage(lsLangValid ? lsLang : fallbackLang);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;

		window.localStorage.setItem(LS_LANG, language);
	}, [language]);

	const toggleLanguage = useCallback(() => {
		switch (language) {
			case Language.EN:
				setLanguage(Language.SR);
				break;
			case Language.SR:
				setLanguage(Language.EN);
				break;
			default:
				break;
		}
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{
				language: language,
				setLanguage: setLanguage,
				toggleLanguage: toggleLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
