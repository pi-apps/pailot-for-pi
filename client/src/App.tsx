import React from 'react';
import { Home, SplashScreen, WelcomeScreen } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
// import { slideLeft } from './animations'

function App() {
	return (
		<BrowserRouter>
			<AnimatePresence>
				<motion.div
					// animate={slideLeft}
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '-100%', opacity: 0 }}
				>
					<Routes>
						<Route path='/' element={<SplashScreen />} />
						<Route path='/welcome' element={<WelcomeScreen />} />
						<Route path='/home' element={<Home />} />
					</Routes>
				</motion.div>
			</AnimatePresence>
		</BrowserRouter>
	)
}

export default App;
