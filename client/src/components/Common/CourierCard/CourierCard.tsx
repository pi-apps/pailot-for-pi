import React, { useEffect, useState } from 'react';
import styles from './CourierCard.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiEBikeLine } from 'react-icons/ri';
import { GoClock } from 'react-icons/go';
import { defaultUser } from '../../../assets/images';
import { PiIcon } from '../../../assets/icons';

interface Props {
	status: string;
	online: boolean;
}

export const CourierCard: React.FC<Props> = ({ status, online }) => {
	const [courierStatus, setCourierStatus] = useState<string>('');

	useEffect(() => {
		setCourierStatus(status);

		return () => {
			setCourierStatus(status);
		};
	}, [status]);

	return (
		<div
			className={`${styles.container} ${courierStatus === 'picked' && styles.picked__container} `}
			onClick={() => {
				console.log(courierStatus);
			}}
		>
			<div className={styles.courier__photo__container}>
				<img src={defaultUser} alt="Default User Photo" />
				<div className={`${online ? styles.online : styles.offline}`}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.top__part}>
					<div className={styles.courier__details}>
						<span className={styles.username}>@piusername</span>
						<span className={styles.new__user}>New user</span>
					</div>
					<div className={styles.cta__container}>
						{courierStatus === 'pick' ? (
							<button
								type="button"
								className={styles.pick__cta}
								onClick={() => setCourierStatus('picked')}
							>
								Pick
							</button>
						) : (
							''
						)}
						{courierStatus === 'pending' && (
							<button type="button" className={styles.pending__cta}>
								Pending
							</button>
						)}
						{courierStatus === 'picked' && (
							<button type="button" className={styles.picked__cta}>
								Picked
							</button>
						)}

						<BsThreeDotsVertical />
					</div>
				</div>
				<div className={styles.bottom__part}>
					<span className={styles.amount}>
						<img src={PiIcon} alt="Pi Icon" />
						0.00034pi
					</span>
					<span className={styles.time}>
						<GoClock className={styles.icon} />
						7am - 8pm
					</span>
					<span className={styles.vehicle}>
						<RiEBikeLine className={styles.icon} />
						Motorcycle
					</span>
				</div>
			</div>
		</div>
	);
};
