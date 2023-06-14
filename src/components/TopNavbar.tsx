import { FC } from 'react'
import { Download } from './Icons/Download'

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = ({}) => {
	return (
		<>
			<nav className='p-2 text-[#FFFFFF]'>
				<div className='flex items-center gap-6'>
					{/* logo */}
					<div className='text-3xl font-extrabold uppercase '>JM</div>

					{/* CV */}

					<div className='flex gap-2 items-center text-sm'>
						<Download />
						<div>CV</div>
					</div>

					{/* contact */}
					<div className='text-sm'>
						<p>CONTACT</p>
					</div>
				</div>
			</nav>
			<nav className='flex fixed bottom-0 text-[#FFFFFF]'>
				<ul>
					<li>
						<a href=''>L</a>
					</li>
					<li>
						<a href=''>Github</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default TopNavbar
