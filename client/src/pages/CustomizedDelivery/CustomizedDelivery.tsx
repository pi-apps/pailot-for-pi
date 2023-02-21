import styles from './CustomizedDelivery.module.css';
import { logo } from '../../assets/images/index';
import { GrMapLocation } from 'react-icons/gr';
import { Upload } from '../../components/CustomizedDelivery/Upload';
import { Name } from '../../components/CustomizedDelivery/Name';
import { Size } from '../../components/CustomizedDelivery/Size';
import { MOD } from '../../components/CustomizedDelivery/MOD';
import { Location } from '../../components/CustomizedDelivery/Location';
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
				{progress === 1 && <Upload setProgress={progressHandler} />}
				{progress === 2 && <Name setProgress={progressHandler} />}
				{progress === 3 && <Size setProgress={progressHandler} />}
				{progress === 4 && <MOD setProgress={progressHandler} />}
				{progress === 5 && <Location setProgress={progressHandler} />}
			</div>
		</div>
	);
};
