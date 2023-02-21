import styles from './FooterNavBar.module.css';
import { pailotPurpleLogo } from '../../../assets/images';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { RiWallet2Line } from 'react-icons/ri';
import { RiQrScan2Line } from 'react-icons/ri';

export const FooterNavBar = () => {
	return (
		<nav className={styles.footer__nav}>
			<ul className={styles.list}>
				<li className={styles.active__item}>
					<img src={pailotPurpleLogo} alt="Pailot Logo" />
					<span className={styles.link__text}>Pailot</span>
				</li>
				<li className={styles.list__item}>
					<RiShoppingCart2Line />
					<span className={styles.link__text}>Dashboard</span>
				</li>
				<li className={styles.list__item}>
					<RiWallet2Line />
					<span className={styles.link__text}>Wallet</span>
				</li>
				<li className={styles.list__item}>
					<RiQrScan2Line />
					<span className={styles.link__text}>Code Verify</span>
				</li>
			</ul>
		</nav>
	);
};
