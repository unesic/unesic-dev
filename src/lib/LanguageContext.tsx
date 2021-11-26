import React, { createContext, useCallback, useEffect, useState } from "react";

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
	language: Language.SR,
	setLanguage: () => {},
	toggleLanguage: () => {},
};

export const LanguageContext = createContext(defaultState);

export const LanguageProvider: React.FC = ({ children }) => {
	const [language, setLanguage] = useState<Language>(Language.SR);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const lang = window.localStorage.getItem("unesicio-lang");
		if (lang && [Language.SR, Language.EN].includes(lang as Language)) {
			setLanguage(lang as Language);
		}
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;

		window.localStorage.setItem("unesicio-lang", language);
	}, [language]);

	useEffect(() => {
		const navLang = navigator.language;
		const is_sr = navLang === "sr";
		const language = Language[is_sr ? "SR" : "EN"];
		setLanguage(language);
	}, [setLanguage]);

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
