import styles from './CustomizedDelivery.module.css';
import { logo } from '../../assets/images/index';
import { GrMapLocation } from 'react-icons/gr';
import { useState } from 'react';
import {
	DeliveryDetails,
	DeliveryLocation,
	DeliveryWeightSize,
	ModeOfDelivery,
	UploadDeliveryImage,
} from '../../components';

export const CustomizedDelivery = () => {
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
				{progress === 1 && <UploadDeliveryImage setProgress={progressHandler} />}
				{progress === 2 && <DeliveryDetails setProgress={progressHandler} />}
				{progress === 3 && <DeliveryWeightSize setProgress={progressHandler} />}
				{progress === 4 && <ModeOfDelivery setProgress={progressHandler} />}
				{progress === 5 && <DeliveryLocation setProgress={progressHandler} />}
			</div>
		</div>
	);
};
