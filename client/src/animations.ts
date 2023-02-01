export const scaleRotate = {
	scale: [10, 1, 1, 1, 20],
	rotate: [0, 0, 270, 270, 0],
	borderRadius: ['20%', '20%', '50%', '50%', '50%'],
	transition: {
		scale: { duration: 12 },
		rotate: { duration: 4 },
		borderRadius: { duration: 8 },
	},
};

export const fadeIn = {
	opacity: [0, 0, 1, 1, 0],
	transition: {
		opacity: { duration: 9 },
	},
};

export const slideUp = {
	y: [100, 0],
	transition: {
		y: { duration: 0.3 },
	},
};

export const slideLeft = {
	x: ['0%', '100%'],
	opacity: [1, 0],
	exit: {
		x: ['-100%'],
		opacity: [0],
	},
	transition: {
		exit: { duration: 2 },
		x: { duration: 2 },
	},
};
