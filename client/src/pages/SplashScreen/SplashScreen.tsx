import { useState } from 'react';
import { ScreenOne, ScreenTwo } from '../../components';
import {SplashScreenState} from '../../types/SplashScreenState'
export const SplashScreen = () => {
	const [nextScreen, setNextScreen] = useState<SplashScreenState>('first_screen');

	return (
		<>
			{nextScreen == 'first_screen' && <ScreenOne setNextScreen={setNextScreen} />}
			{nextScreen == 'progress_bar' && <ScreenTwo />}
		</>
	);
};
