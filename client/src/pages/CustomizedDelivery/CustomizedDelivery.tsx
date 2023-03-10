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
	DeliverySummary,
	DeliveryPayment,
	OrderSucessful,
} from '../../components';

export const CustomizedDelivery = () => {
	const [progress, setProgress] = useState<number>(1);
	const [uploadedImage, setUploadedImage] = useState<File>();
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
				{progress === 1 && (
					<UploadDeliveryImage
						setProgress={setProgress}
						uploadedImage={uploadedImage}
						setUploadedImage={setUploadedImage}
					/>
				)}
				{progress === 2 && <DeliveryDetails setProgress={setProgress} />}
				{progress === 3 && <DeliveryWeightSize setProgress={setProgress} />}
				{progress === 4 && <ModeOfDelivery setProgress={setProgress} />}
				{progress === 5 && <DeliveryLocation setProgress={setProgress} />}
				{progress === 6 && <DeliverySummary setProgress={setProgress} />}
				{progress === 7 && (
					<DeliveryPayment setProgress={setProgress} uploadedImage={uploadedImage} />
				)}
				{progress === 8 && <OrderSucessful />}
			</div>
		</div>
	);
};
