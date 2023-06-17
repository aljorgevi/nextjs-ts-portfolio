export const Burger = ({
	className,
	width = 50,
	height = 50,
	color = '#ffffff'
}: {
	className?: string
	width?: number
	height?: number
	color?: string
}) => (
	<svg
		width={`${width}px`}
		height={`${height}px`}
		viewBox='0 0 24 24'
		className={className}
		fill='none'
	>
		<path d='M5 12H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
		<path d='M5 17H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
		<path d='M5 7H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
	</svg>
)
