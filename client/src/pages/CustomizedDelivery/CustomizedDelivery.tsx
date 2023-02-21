import styles from './CustomizedDelivery.module.css';
import { logo } from '../../assets/images/index';
import { GrMapLocation } from 'react-icons/gr';
import { UploadDeliveryImage } from '../../components/CustomizedDelivery/UploadDeliveryImage';
import { DeliveryDetails } from '../../components/CustomizedDelivery/DeliveryDetails';
import { DeliveryWeightSize } from '../../components/CustomizedDelivery/DeliveryWeightSize';
import { ModeOfDelivery } from '../../components/CustomizedDelivery/ModeOfDelivery';
import { DeliveryLocation } from '../../components/CustomizedDelivery/DeliveryLocation';
// import { RecieverConfirmed } from '../../components/CustomizedDelivery/RecieverConfirmed';
// import { Summary } from '../../components/CustomizedDelivery/Summary';
// import { Payment } from '../../components/CustomizedDelivery/Payment';
import { useState } from 'react';

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
