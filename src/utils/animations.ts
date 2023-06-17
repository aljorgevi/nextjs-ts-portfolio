export const heroAnimation = {
	initial: 'hidden',
	animate: 'show',
	exit: 'exit',
	transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
	variants: {
		hidden: {
			y: 0,
			opacity: 0,
			height: 0,
			overflow: 'hidden'
		},
		show: {
			y: 0,
			opacity: 1,
			transition: { duration: 1 },
			height: 'auto',
			overflow: 'hidden'
		},
		exit: {
			y: 0,
			opacity: 0,
			transition: { duration: 0.7 },
			height: 0,
			overflow: 'hidden'
		}
	}
}

export const navbarAnimation = {
	initial: 'hidden',
	animate: 'show',
	exit: 'exit',
	transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
	variants: {
		hidden: {
			y: 0,
			opacity: 0,
			height: 0
		},
		show: {
			y: 0,
			opacity: 1,
			height: 'auto'
		},
		exit: {
			y: 0,
			opacity: 0,
			height: 0
		}
	}
}
