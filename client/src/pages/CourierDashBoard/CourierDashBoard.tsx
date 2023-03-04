import styles from './CourierDashBoard.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FooterNavBar } from '../../components';
import { defaultUser } from '../../assets/images';
import { FaStar } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdBicycle } from 'react-icons/io';
// import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
// eslint-disable-next-line no-unused-vars
import { RiEBikeLine, RiTruckLine, RiFootprintLine } from 'react-icons/ri';

export const CourierDashBoard = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			{/* <LoadingSpinner />  */}
			<div className={styles.top__bar}>
				<motion.div initial={{ x: 26 }} animate={{ x: 0 }} onClick={() => navigate('/settings')}>
					<span>Dashboard</span>
				</motion.div>
			</div>
			<div className={styles.body}>
				<section className={styles.profile__and_rating}>
					<div className={styles.profile}>
						<p>Hi, @piusername</p>
						<div className={styles.image__and__status}>
							<img src={defaultUser} alt="Profile Picture" />
							<div className={styles.online}>
								<span className={styles.text}>Online</span>
								<span></span>
							</div>
						</div>
					</div>
					<div className={styles.rating}>
						<FaStar className={styles.bright__star} />
						<FaStar className={styles.bright__star} />
						<FaStar className={styles.dark__star} />
						<FaStar className={styles.dark__star} />
						<FaStar className={styles.dark__star} />
					</div>
				</section>
				<section className={styles.delivery__status}>
					<h5>Delivery Status</h5>
					<div className={styles.carousel__container}>
						<div className={styles.carousel}>
							<div className={styles.item}>
								<p className={styles.header}>
									<span>Your Pricing</span> <AiOutlineEdit className={styles.edit__icons} />
								</p>
								<div className={styles.value}>
									<p>0.02pi</p>
									<span className={styles.sub__value}>per trip</span>
								</div>
								<span className={styles.description}>
									What you charge for a single trip delivery
								</span>
							</div>

							<div className={styles.item}>
								<p className={styles.header}>
									<span>Mode Of Delivery</span> <AiOutlineEdit className={styles.edit__icons} />
								</p>
								<div className={styles.mod__value}>
									<div className={`${styles.mod} ${styles.motorbike}`}>
										<RiEBikeLine className={styles.mod__icon} />
									</div>
									<div className={`${styles.mod} ${styles.bicycle}`}>
										<IoMdBicycle className={styles.mod__icon} />
									</div>
									<div className={`${styles.mod} ${styles.truck}`}>
										<RiTruckLine className={styles.mod__icon} />
									</div>
									<div className={`${styles.mod} ${styles.foot}`}>
										<RiFootprintLine className={styles.mod__icon} />
									</div>
								</div>
								<span className={styles.description}>
									What you charge for a single trip delivery
								</span>
							</div>
							<div className={`${styles.item} ${styles.delivery__areas}`}>
								<p className={styles.header}>
									Delivery Areas <AiOutlineEdit className={styles.edit__icons} />
								</p>
								<div className={styles.value}>
									<p>Lagos</p>
									<span className={styles.sub__value}>Yaba</span>
								</div>
								<span className={styles.description}>Delivery Routes</span>
							</div>
							<div className={`${styles.item} ${styles.working__hours}`}>
								<p className={styles.header}>
									Working Hours <AiOutlineEdit className={styles.edit__icons} />
								</p>
								<div className={styles.value}>
									<p>7am - 6pm</p>
									<span className={styles.sub__value}>Time Zone: GMT +1</span>
								</div>
								<span className={styles.description}>Most active time when delivery</span>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.analytics__container}>
					<div className={styles.analytics__header}>
						<h5>Analytics</h5>
						<h6>
							Monthly
							<span></span>
						</h6>
					</div>
					<div className={styles.analytics}>
						<div className={styles.data}>
							<p className={styles.count}>1,453</p>
						</div>
					</div>
				</section>
			</div>
			<FooterNavBar active="dashboard" />
		</div>
	);
};
