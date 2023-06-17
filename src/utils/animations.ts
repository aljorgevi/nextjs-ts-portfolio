export const contentAnimation = {
	initial: 'hidden',
	whileInView: 'show',
	exit: 'exit',
	transition: { duration: 0.5, ease: 'easeInOut' },
	variants: {
		hidden: {
			opacity: 0,
			y: -50
		},
		show: {
			opacity: 1,
			y: 10
		},
		exit: {
			opacity: 0,
			y: -50
		}
	}
}
