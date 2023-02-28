import React, { useEffect, useState } from 'react';
import styles from './CourierCard.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiEBikeLine } from 'react-icons/ri';
import { GoClock } from 'react-icons/go';
// import { defaultUser } from '../../../assets/images';
import { PiIcon } from '../../../assets/icons';
import { useDispatch } from 'react-redux';
import { deliveryDetailsActions } from '../../../store/store';

interface Props {
	status: string;
	courierImage: any;
	courierUserName: string;
	newUser: boolean;
	courierCharge: number;
	startTime: string;
	endTime: string;
	modeOfTransportation: string;
	online: boolean;
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const CourierCard: React.FC<Props> = ({
	status,
	courierImage,
	courierCharge,
	courierUserName,
	newUser,
	startTime,
	endTime,
	modeOfTransportation,
	online,
	setProgress,
}) => {
	const [courierStatus, setCourierStatus] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		setCourierStatus(status);

		return () => {
			setCourierStatus(status);
		};
	}, [status]);

	const deliveryDetailsSubmitHandler = () => {
		dispatch(
			deliveryDetailsActions.setCourierDetails({
				courierImage: { courierImage },
				courierUserName: courierUserName,
				newUser: true,
				status: status,
			})
		);
	};

	return (
		<div
			className={`${styles.container} ${courierStatus === 'picked' && styles.picked__container} `}
			onClick={() => {
				console.log(courierStatus);
			}}
		>
			<div className={styles.courier__photo__container}>
				<img src={courierImage} alt="Default User Photo" />
				<div className={`${online ? styles.online : styles.offline}`}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.top__part}>
					<div className={styles.courier__details}>
						<span className={styles.username}>{courierUserName}</span>
						{newUser && <span className={styles.new__user}>New user</span>}
					</div>
					<div className={styles.cta__container}>
						{courierStatus === 'pick' ? (
							<button
								type="button"
								className={styles.pick__cta}
								onClick={() => {
									setCourierStatus('picked');
									deliveryDetailsSubmitHandler();
									setProgress(2);
								}}
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
						{`${courierCharge}pi`}
					</span>
					<span className={styles.time}>
						<GoClock className={styles.icon} />
						{`${startTime} - ${endTime}`}
					</span>
					{modeOfTransportation === 'Motorbike' && (
						<span className={styles.vehicle}>
							<RiEBikeLine className={styles.icon} />
							Motorcycle
						</span>
					)}
					{modeOfTransportation === 'Motorbike' && (
						<span className={styles.vehicle}>
							<RiEBikeLine className={styles.icon} />
							Motorcycle
						</span>
					)}
					{modeOfTransportation === 'Motorbike' && (
						<span className={styles.vehicle}>
							<RiEBikeLine className={styles.icon} />
							Motorcycle
						</span>
					)}
					{modeOfTransportation === 'Motorbike' && (
						<span className={styles.vehicle}>
							<RiEBikeLine className={styles.icon} />
							Motorcycle
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
