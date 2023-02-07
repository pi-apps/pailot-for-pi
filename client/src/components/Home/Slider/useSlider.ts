function useSlider() {
	interface BreakPoint {
		width: number;
		itemsToShow: number;
		showArrows?: boolean;
		pagination?: boolean;
	}
	const breakPoints: BreakPoint[] = [
		{ width: 1, itemsToShow: 1, showArrows: false, pagination: false },
		{ width: 550, itemsToShow: 2, showArrows: true },
		{ width: 768, itemsToShow: 3 },
	];
	return { breakPoints };
}
export default useSlider;
