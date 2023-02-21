import React from 'react';
import { Header } from '../../components';
import { Route, Routes } from 'react-router-dom';
import { SettingsHome, Wallet } from '../../components';
import { LeftArrow, LogOut } from '../../assets/icons';
export const Settings = () => {
	return (
		<>
			<div>
				<Header
					left_icon={LeftArrow}
					right_icon={LogOut}
					left_route_location="/home"
					right_route_location="/"
					title="Settings"
				/>

				<Routes>
					<Route path="/" element={<SettingsHome />} />
					<Route path="wallet" element={<Wallet />} />
				</Routes>
			</div>
		</>
	);
};
