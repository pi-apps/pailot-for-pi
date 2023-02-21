import React from 'react';
import { Link } from 'react-router-dom';
import {
	BackgroundIcon,
	CameraIcon,
	EditIcon,
	PiIcon,
	PlusIcon,
	ProfileAvatarIcon,
	ProfileIcon,
	RiCalendarTodoLine,
	UserIcon,
	WalletIcon,
} from '../../../assets/icons';
import { logo } from '../../../assets/images';
import Styles from './SettingsHome.module.css';

export const SettingsHome = () => {
	return (
		<div>
			<div className={Styles.card}>
				<div className={Styles.image_wrapper}>
					<img src={logo} alt="profile image" className={Styles.image_size} />
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
					<img src={ProfileIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.profileContent}>
					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={UserIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Pi username</span>
								<small>@piusername</small>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr className={Styles.divider} />

			<div className={Styles.display}>
				<div className={Styles.displayTitle}>
					<span>Display pictures</span>
					<img src={CameraIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.displayContent}>
					<div className={Styles.displayContentLayout}>
						<div className={Styles.displayFirstPart}>
							<img src={BackgroundIcon} className={Styles.profileIcons} />
							<div>Background</div>
						</div>
						<img src={PlusIcon} className={Styles.profileIcons} />
					</div>

					<div className={Styles.displayContentLayout}>
						<div className={Styles.displayFirstPart}>
							<img src={ProfileAvatarIcon} className={Styles.profileIcons} />
							<div>Profile Avatar</div>
						</div>
						<img src={PlusIcon} className={Styles.profileIcons} />
					</div>
				</div>
			</div>

			<hr className={Styles.divider} />

			<div className={Styles.profile}>
				<div className={Styles.profileTitle}>
					<span>Wallet</span>
					<img src={WalletIcon} className={Styles.profileIcons} />
				</div>
				<div className={Styles.profileContent}>
					<div className={Styles.profileContentLayout}>
						<div className={Styles.profileFirstPart}>
							<img src={PiIcon} className={Styles.profileIcons} />
							<div className={Styles.profileSecondPart}>
								<span>Pi Wallet Address</span>
								<small>Copy and paste your Pi Wallet address here</small>
							</div>
						</div>
						<Link to="/settings/wallet">
							<img src={EditIcon} className={Styles.profileIcons} />
						</Link>
					</div>
				</div>
			</div>
			<hr className={Styles.divider} />
		</div>
	);
};
