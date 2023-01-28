import React from 'react';
import { Home, SplashScreen, WelcomeScreen } from './pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SplashScreen />} />
				<Route path='/welcome' element={<WelcomeScreen />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
