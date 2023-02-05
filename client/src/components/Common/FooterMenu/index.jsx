import React from 'react';
import Styles from './FooterMenu.module.css';
import {
	RiCalendarTodoLine,
	pailot,
	AiOutlineShoppingCart,
	AiOutlineWallet,
	scan,
} from '../../../assets/icons';
export const FooterMenu = () => {
	return (
		<div id={Styles.wrapper}>
			<div className={Styles.menu}>
				<img style={{ width: '1.2rem' }} src={pailot} alt="icon" />
				<span>Pailot</span>
			</div>
			<div className={Styles.menu}>
				<RiCalendarTodoLine className={Styles.icon} />
				<span>Categories</span>
			</div>
			<div className={Styles.menu}>
				<AiOutlineShoppingCart className={Styles.icon} />
				<span>My Delivery</span>
			</div>
			<div className={Styles.menu}>
				<AiOutlineWallet className={Styles.icon} />
				<span>My Delivery</span>
			</div>
			<div className={Styles.menu}>
				<img src={scan} alt="icon" className={Styles.icon} />
				<span>Code Verify</span>
			</div>
		</div>
	);
};
