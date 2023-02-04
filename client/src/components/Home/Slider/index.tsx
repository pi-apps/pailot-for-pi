import Carousel from 'framer-motion-carousel';
import Styles from './Slider.module.css';
import { Button } from '../../../components';
import { sliderImg1 } from '../../../assets/images';
export const Slider = () => {
	return (
		<div id={Styles.Wrapper}>
			<Carousel autoPlay={true} interval={3000} loop={true}>
				<div className={Styles.FirstItem}>
					<div className={Styles.Content}>
						<h2>Welcome to Pailot!</h2>
						<p>
							Hub for decentralized delivery for all works of pioneers around the everyday ecosystem
						</p>
						<h3>FAST. DECENTRALIZED. SAFE & SECURE</h3>
						<Button value="Read more" />
					</div>
					<img src={sliderImg1} className={Styles.SliderImage} alt="" />
				</div>
			</Carousel>
		</div>
	);
};
