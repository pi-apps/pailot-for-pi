import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Header.module.css';
interface Props {
	left_icon: string;
	right_icon: string;
	left_route_location: string;
	right_route_location: string;
	title: string;
}

export const Header = ({
	left_icon,
	right_icon,
	left_route_location,
	right_route_location,
	title,
}: Props) => {
	return (
		<div id={Styles.wrapper}>
			<div>
				<Link to={left_route_location}>
					<div className={Styles.image_wrapper}>
						<img src={left_icon} className={Styles.image_size} alt="left icon" />
					</div>
				</Link>
				<span>{title}</span>
			</div>
			<div>
				<Link to={right_route_location}>
					<img src={right_icon} alt="right icon" />
				</Link>
			</div>
		</div>
	);
};
