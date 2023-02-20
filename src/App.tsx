import React from 'react';
import { Home, SplashScreen, WelcomeScreen, ShareLocation, OnboardingCompleted } from './pages';
import { Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomizedDelivery } from './pages';

function App() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '-100%', opacity: 0 }}
			>
				<AnimatePresence>
					<Routes>
						<Route path="/" element={<SplashScreen />} />
						<Route path="/welcome" element={<WelcomeScreen />} />
						<Route path="/share-location" element={<ShareLocation />} />
						<Route path="/onboarding-completed" element={<OnboardingCompleted />} />
						<Route path="/home" element={<Home />} />
						<Route path="/customized-delivery" element={<CustomizedDelivery />} />
					</Routes>
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	);
}

export default App;
