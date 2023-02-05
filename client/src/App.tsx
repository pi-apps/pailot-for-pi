import React from 'react';
import { Home, Settings, SplashScreen, WelcomeScreen } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInFast } from './animations';

function App() {
	return (
		<BrowserRouter>
			<AnimatePresence>
				<motion.div animate={fadeInFast}>
					<Routes>
						<Route path="/" element={<SplashScreen />} />
						<Route path="/welcome" element={<WelcomeScreen />} />
						<Route path="/home" element={<Home />} />
						<Route path="/settings/*" element={<Settings />} />
					</Routes>
				</motion.div>
			</AnimatePresence>
		</BrowserRouter>
	);
}

export default App;
