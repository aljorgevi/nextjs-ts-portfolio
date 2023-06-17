'use client'

import { FC } from 'react'
import { Download } from './Icons/Download'
import { GithubIcon } from './Icons/Github'
import { LinkedinIcon } from './Icons/Linkedin'

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
			{/* <nav className='[&>ul>li]:p-4'> */}
			<nav className=''>
				<ul className='flex items-center '>
					{/* logo */}
					<li className='text-3xl font-extrabold uppercase w-[5rem] p-4 pr-0'>JM</li>

					{/* CV */}
					<li className='shadow-3xl py-3 px-7 p-4'>
						<a
							onClick={handleDownload}
							className='flex gap-2 items-center  relative group hover:opacity-75
						transition-all duration-300 ease-in-out
						'
							href='#'
						>
							<Download />
							<div>CV</div>
							<span className='absolute  bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[180%]'></span>
						</a>
					</li>

					{/* contact */}
					<li
						className='links contact-li cursor-pointer uppercase shadow-3xl py-3 px-3 group hover:opacity-75
						transition-all duration-300 ease-in-out p-4'
					>
						<a className='contact-link relative'>
							<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[120%]'></span>
						</a>
					</li>
				</ul>
			</nav>

			{/* [&>li>a]:transition-colors */}
			<nav
				className='fixed bottom-0 text-[#FFFFFF]
				h-[100%] w-[5rem] flex flex-col items-center justify-end
			'
			>
				<ul className='flex flex-col'>
					<li className='shadow-3xl py-7'>
						<a href='#'>
							<LinkedinIcon width={60} height={25} />
						</a>
					</li>
					<li className='shadow-3xl py-4'>
						<a href='#'>
							<GithubIcon className='mb-5' width={60} height={25} />
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default TopNavbar
