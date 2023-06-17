'use client'

import { FC, useState } from 'react'
import { Download } from './Icons/Download'
import { GithubIcon } from './Icons/Github'
import { LinkedinIcon } from './Icons/Linkedin'
import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { Burger } from './Icons/Burger'

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = () => {
	const desktop = useMediaQuery('(min-width: 768px)')
	const [show, setShow] = useState(false)

	const showSidebarHandler = () => {
		setShow(!show)
	}

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/CV.pdf'
		link.download = 'Jorge_Mena_CV.pdf'
		link.click()
	}

	return (
		<>
			<div>
				{desktop ? (
					<div className=''>
						<ul className='flex items-center '>
							{/* logo */}
							<li className='text-3xl font-extrabold uppercase w-[5rem] p-4 pr-0'>JM</li>

							{/* CV */}
							<li className='shadow-3xl py-3 px-7 p-4'>
								<button
									onClick={handleDownload}
									className='flex gap-2 items-center  relative group hover:opacity-75
transition-all duration-300 ease-in-out
'
								>
									<Download />
									<div>CV</div>
									<span className='absolute  bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[180%]'></span>
								</button>
							</li>

							{/* contact */}
							<li
								className='links contact-li cursor-pointer uppercase shadow-3xl py-3 px-3 group hover:opacity-75
transition-all duration-300 ease-in-out p-4'
							>
								<button className='contact-link relative'>
									<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[120%]'></span>
								</button>
							</li>
						</ul>
					</div>
				) : (
					<>
						<div className='flex items-center justify-end pr-5 pt-1'>
							<div>
								<div className='flex justify-between items-center h-6rem'>
									<button className='p-1.5' onClick={showSidebarHandler}>
										<Burger />
									</button>
								</div>
							</div>
						</div>
						<div className='w-screen'>
							<div
								className={`flex flex-col justify-center items-center transition ${
									show ? 'h-38rem' : 'h-0 overflow-hidden'
								}`}
							>
								<ul>
									<li className='flex justify-center'>
										<button
											onClick={handleDownload}
											className='flex gap-2 items-center group hover:opacity-75 mb-2
									transition-all duration-300 ease-in-out relative'
										>
											<Download />
											<div>CV </div>
											<span className='absolute  bg-[#fff] h-[3px] w-[85vw] bottom-[-15px] left-1/2 -translate-x-1/2'></span>
										</button>
									</li>
									<li>
										<div className='relative pt-3'>
											<div>jormencar@gmail.com </div>
											<span className='absolute  bg-[#fff] h-[3px] w-[85vw] bottom-[-15px] left-1/2 -translate-x-1/2'></span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</>
				)}

				<nav
					className='hidden fixed bottom-0 text-[#FFFFFF]
		h-[100%] w-[5rem] md:flex flex-col items-center justify-end
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
			</div>
		</>
	)
}

export default TopNavbar
