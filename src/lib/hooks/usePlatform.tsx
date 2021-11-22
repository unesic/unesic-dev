import { useEffect, useState } from "react";

export enum Platform {
	MAC = "MAC",
	WIN = "WIN",
}

export const usePlatform = () => {
	const [platform, setPlatform] = useState<Platform>();

	useEffect(() => {
		const userAgent = window.navigator.userAgent;

		const isWin = userAgent.includes("Windows");
		const isMac = userAgent.includes("Mac");

		if (isMac) setPlatform(Platform.MAC);
		else if (isWin) setPlatform(Platform.WIN);
		else setPlatform(Platform.WIN);
	}, [window.navigator.userAgent]);

	return [platform, setPlatform];
};
