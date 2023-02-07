import React from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import Styles from './Slider.module.css';
import { Button } from '../../../components';
import { sliderImg1 } from '../../../assets/images';

export const Slider: React.FC = () => {
	const carouselProps: ReactElasticCarouselProps = {
		itemsToShow: 1,
		itemsToScroll: 2,
		showArrows: false,
		breakPoints: [
			{ width: 1, itemsToShow: 1 },
			{ width: 550, itemsToShow: 2 },
			{ width: 768, itemsToShow: 3 },
			{ width: 1200, itemsToShow: 4 },
		],
		isRTL: false,
	};

	return (
		<div id={Styles.Wrapper}>
			<Carousel {...carouselProps}>
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
