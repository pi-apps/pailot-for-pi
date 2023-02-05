import React from 'react';
import { Header } from '../../components';
import { Route, Routes } from 'react-router-dom';
import { SettingsHome, PersonalDetails, PhoneNumber, Wallet } from '../../components';
import { leftArrow, logOut } from '../../assets/icons';
export const Settings = () => {
	return (
		<>
			<div>
				<Header
					left_icon={leftArrow}
					right_icon={logOut}
					left_route_location="/home"
					right_route_location="/"
					title="Settings"
				/>

				<Routes>
					<Route path="/" element={<SettingsHome />} />
					<Route path="/personal_details" element={<PersonalDetails />} />
					<Route path="phone_number" element={<PhoneNumber />} />
					<Route path="wallet" element={<Wallet />} />
				</Routes>
			</div>
		</>
	);
};
