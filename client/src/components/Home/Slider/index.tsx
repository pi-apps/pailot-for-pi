import React from 'react'
// import Carousel from 'react-elastic-carousel'
import Styles from './Slider.module.css';
import { Button } from '../../../components';
import { sliderImg1 } from '../../../assets/images';
import ReactElasticCarousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';

interface Props extends ReactElasticCarouselProps {
	children: React.ReactNode;
}

export const Slider: React.FC<Props> = ({ children, ...props }) => {
	// interface BreakPoints { 
	// 	width: number;
	// 	itemsToShow: number; itemsToScroll: number;
	// 	}
	// const breakPoints: BreakPoints[] = [
	// 	{ width: 1, itemsToShow: 1, itemsToScroll:1 },
	// 	{ width: 550, itemsToShow: 2, itemsToScroll: 1 },
	// 	{ width: 768, itemsToShow: 3, itemsToScroll:1 },
	// ];
	return (
		<div id={Styles.Wrapper}>
			<ReactElasticCarousel {...props}>
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
				</div></ReactElasticCarousel>
			{/* <Carousel showArrows={true} breakPoints={breakPoints}>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 5</div>
			</Carousel> */}
		</div>
	);
};
