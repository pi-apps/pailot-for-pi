import { FooterMenu, Header } from '../../components';
import { userImage, delivery, delivery2, logistics1 } from '../../assets/images';
import { mapIcon } from '../../assets/icons';
import { Slider, Button } from '../../components';
import Styles from './Home.module.css';
export const Home = () => {
	return (
		<div>
			<Header
				left_icon={userImage}
				right_icon={mapIcon}
				left_route_location="/settings"
				right_route_location="/map"
				title="Pilot"
			/>
			<Slider />
			<div className={Styles.HomeContainer}>
				<div className={Styles.div1}>
					<h3 className={Styles.heading}>Create your first delivery</h3>
					<div className={Styles.main_contents}>
						<div className={Styles.contents}>
							<h4>Be a one time</h4>
							<h2 className={Styles.title}>Delivery</h2>
							<p>that is safe, fast & conveniently pay with Pi coin</p>
							<Button value="Create your delivery" />
						</div>
						<div className={Styles.image_wrapper}>
							<img src={delivery} alt="" />
							<span>Learn more</span>
						</div>
					</div>
				</div>

				<div className={Styles.div1}>
					<h3 className={Styles.heading}>Become a courier</h3>
					<div className={Styles.main_contents}>
						<div className={Styles.contents}>
							<h4>Be a one time</h4>
							<h2 className={Styles.title}>Courier</h2>
							<p>and earn Pi for every delivery</p>
							<Button value="Become a courier" />
						</div>
						<div className={Styles.image_wrapper}>
							<img src={delivery2} alt="" />
							<span>Learn more</span>
						</div>
					</div>
				</div>

				<div className={Styles.div1}>
					<h3 className={Styles.heading}>Create your first delivery</h3>
					<div className={Styles.main_contents}>
						<div className={Styles.contents}>
							<h4>Get shipment faster, safe with your </h4>
							<h2 className={Styles.title}>Courier</h2>
							<p>that is safe, fast & conveniently pay with Pi coin</p>
							<Button value="Create your delivery" />
						</div>
						<div className={Styles.image_wrapper}>
							<img src={logistics1} alt="" />
							<span>Learn more</span>
						</div>
					</div>
				</div>
			</div>

			<FooterMenu />
		</div>
	);
};
