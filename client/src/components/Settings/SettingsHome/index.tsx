import React from 'react';
import { Link } from 'react-router-dom';
import {
	addressIcon,
	backgroundIcon,
	cameraIcon,
	editIcon,
	nameIcon,
	phoneIcon,
	piIcon,
	plusIcon,
	profileAvatarIcon,
	profileIcon,
	RiCalendarTodoLine,
	settingIcon,
	userIcon,
	walletIcon,
} from '../../../assets/icons';
import { userImage } from '../../../assets/images';
import Styles from './SettingsHome.module.css';

export const SettingsHome = () => {
	return (
		<div>
			<div className={Styles.card}>
				<div className={Styles.image_wrapper}>
					<img src={userImage} alt="" className={Styles.image_size} />
				</div>
				<div className={Styles.cardProfile}>
					<h3 className={Styles.cardTitle}>Firstname Lastname</h3>
					<p className={Styles.cardUsername}>@Usernam</p>
					<div className={Styles.cardDateJoin}>
						<RiCalendarTodoLine className={Styles.cardCalendar} /> <span>Joined 2023</span>
					</div>
				</div>
				<button className={Styles.cardBtn}>DELIVER</button>
			</div>

			<div className={Styles.profile}>
				<div className={Styles.profileTitle}>
					<span>Profile Details</span>
					<img src={profileIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.profileContent}>
					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={nameIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Fullnames</span>
								<small>Name must match with Pi Account</small>
							</div>
						</div>
						<Link to="/settings/personal_details">
							<img src={editIcon} className={Styles.profileIcons} />
						</Link>
					</div>

					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={userIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Pi username</span>
								<small>@piusername</small>
							</div>
						</div>
					</div>

					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={phoneIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Phone number</span>
								<small>Nigeria</small>
							</div>
						</div>
						<Link to="/settings/phone_number">
							<img src={editIcon} className={Styles.profileIcons} />
						</Link>
					</div>
				</div>
			</div>

			<hr className={Styles.divider} />

			<div className={Styles.display}>
				<div className={Styles.displayTitle}>
					<span>Profile Details</span>
					<img src={cameraIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.displayContent}>
					<div className={Styles.displayContentLayout}>
						<div className={Styles.displayFirstPart}>
							<img src={backgroundIcon} className={Styles.profileIcons} />
							<div>Background</div>
						</div>
						<img src={plusIcon} className={Styles.profileIcons} />
					</div>

					<div className={Styles.displayContentLayout}>
						<div className={Styles.displayFirstPart}>
							<img src={profileAvatarIcon} className={Styles.profileIcons} />
							<div>Profile Avatar</div>
						</div>
						<img src={plusIcon} className={Styles.profileIcons} />
					</div>
				</div>
			</div>

			<hr className={Styles.divider} />

			<div className={Styles.profile}>
				<div className={Styles.profileTitle}>
					<span>Wallet</span>
					<img src={walletIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.profileContent}>
					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={piIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Pi Wallet Address</span>
								<small>Copy and paste your Pi Wallet address here</small>
							</div>
						</div>
						<Link to="/settings/wallet">
							<img src={editIcon} className={Styles.profileIcons} />
						</Link>
					</div>
				</div>
			</div>
			<hr className={Styles.divider} />

			<div className={Styles.address}>
				<div className={Styles.addressTitle}>
					<span>Shipping Address</span>
					<img src={settingIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.addressContent}>
					<div className={Styles.addressContentLayout}>
						<div className={Styles.addressFirstPart} style={{ flexGrow: '1' }}>
							<img src={addressIcon} className={Styles.profileIcons} />
							<div className={Styles.addressSecondPart}>
								<div>Default Address</div>

								<textarea
									className={Styles.addressTextArea}
									placeholder="Edit to add regular address to receive your delivery"
								/>
							</div>
						</div>
						<img src={editIcon} className={Styles.profileIcons} />
					</div>
				</div>
			</div>
		</div>
	);
};
