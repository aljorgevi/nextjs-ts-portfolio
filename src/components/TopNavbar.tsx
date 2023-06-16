'use client'

import { FC } from 'react'
import { Download } from './Icons/Download'

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = () => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/CV.pdf'
		link.download = 'Jorge_Mena_CV.pdf'
		link.click()
	}

	return (
		<>
			<nav className='p-4 text-[#FFFFFF]'>
				<ul className='flex items-center '>
					{/* logo */}
					<li className='text-3xl font-extrabold uppercase mr-4'>JM</li>

					{/* CV */}
					<li className='shadow-3xl py-3 px-7 ml-4'>
						<a
							onClick={handleDownload}
							className='flex gap-2 items-center  relative group hover:opacity-75
						transition-all duration-300 ease-in-out
						'
							href='#'
						>
							<Download />
							<div>CV</div>
							<span className='absolute  bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[220%]'></span>
						</a>
					</li>

					{/* contact */}
					<li
						className='links contact-li cursor-pointer uppercase shadow-3xl py-3 px-3 group hover:opacity-75
						transition-all duration-300 ease-in-out'
					>
						<a className='contact-link relative'>
							<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[120%]'></span>
						</a>
					</li>
				</ul>
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
