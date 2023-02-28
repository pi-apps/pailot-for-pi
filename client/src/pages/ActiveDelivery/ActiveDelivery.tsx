import styles from './ActiveDelivery.module.css';
import { logo } from '../../assets/images/index';
import { GrMapLocation } from 'react-icons/gr';
import { useState } from 'react';
import {
	DeliveryDetails,
	DeliveryLocation,
	DeliveryWeightSize,
	UploadDeliveryImage,
	DeliverySummary,
	OrderSucessful,
} from '../../components';
import { ActivePayment } from './../../components/ActiveDelivery/ActivePayment';
import { OnlineDelivery } from '../../components/ActiveDelivery/OnlineDelivery';

export const ActiveDelivery = () => {
	const [progress, setProgress] = useState<any>(1);
	const progressHandler = (number: number) => {
		setProgress(number);
	};
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div>
					<img src={logo} alt="Profile Photo" className={styles.profile__photo} />
					<span>Pailot</span>
				</div>
				<span>
					<GrMapLocation className={styles.icon} />
				</span>
			</div>
			<div className={styles.content}>
				{progress === 1 && <OnlineDelivery setProgress={progressHandler} />}
				{progress === 2 && <UploadDeliveryImage setProgress={progressHandler} />}
				{progress === 3 && <DeliveryDetails setProgress={progressHandler} />}
				{progress === 4 && <DeliveryWeightSize setProgress={progressHandler} />}
				{progress === 5 && <DeliveryLocation setProgress={progressHandler} />}
				{progress === 6 && <DeliverySummary setProgress={progressHandler} />}
				{progress === 7 && <ActivePayment setProgress={progressHandler} />}
				{progress === 8 && <OrderSucessful />}
			</div>
		</div>
	);
};
