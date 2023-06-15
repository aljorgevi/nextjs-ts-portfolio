'use client'

import { FC, useState } from 'react'
import { Download } from './Icons/Download'

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = ({}) => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/CV.pdf' // Replace with the actual path to your CV file
		link.download = 'Jorge_Mena_CV.pdf' // Replace with the desired file name
		link.click()
	}

	return (
		<>
			<nav className='p-4 text-[#FFFFFF]'>
				<ul className='flex items-center gap-6'>
					{/* logo */}
					<li className='text-3xl font-extrabold uppercase mr-4'>JM</li>

					{/* CV */}
					<li>
						<a
							onClick={handleDownload}
							className='flex gap-2 items-center  relative group hover:opacity-75
						transition-all duration-300 ease-in-out
						'
							href='#'
						>
							<Download />
							<div>CV</div>
							<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[150%]'></span>
						</a>
					</li>

					{/* contact */}
					<li
						className='links contact-li cursor-pointer uppercase  shadow py-1 group hover:opacity-75
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
