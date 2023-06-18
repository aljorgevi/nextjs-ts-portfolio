'use client'

import { FC, useState } from 'react'
import { Download } from './Icons/Download'
import { GithubIcon } from './Icons/Github'
import { LinkedinIcon } from './Icons/Linkedin'
import { Burger } from './Icons/Burger'
import { AnimatePresence, motion as m } from 'framer-motion'
import { navbarAnimation } from '@/utils/animations'

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = () => {
	const [show, setShow] = useState(false)

	const showSidebarHandler = () => {
		setShow(!show)
	}

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/Jorge_Mena_CV.pdf'
		link.download = 'Jorge_Mena_CV.pdf'

		link.click()
	}

	return (
		<div>
			<DesktopNavbar handleDownload={handleDownload} />
			<MobileNavbar
				showSidebarHandler={showSidebarHandler}
				show={show}
				handleDownload={handleDownload}
			/>
			<Sidebar />
		</div>
	)
}

const Sidebar = () => (
	<nav
		className='hidden fixed bottom-0 text-[#FFFFFF]
										h-[100%] w-[5rem] md:flex flex-col items-center justify-end'
	>
		<ul className='flex flex-col'>
			<m.li
				className='shadow-3xl py-7'
				initial={{
					opacity: 0,
					x: -50
				}}
				animate={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 0.5,
						delay: 0.9
					}
				}}
			>
				<a href='https://www.linkedin.com/in/jorgeamena/' target='_blank' rel='noreferrer'>
					<LinkedinIcon width={60} height={25} />
				</a>
			</m.li>
			<m.li
				initial={{
					opacity: 0,
					x: -50
				}}
				animate={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 0.5,
						delay: 0.9
					}
				}}
				className='shadow-3xl py-4'
			>
				<a href='https://github.com/aljorgevi' target='_blank' rel='noreferrer'>
					<GithubIcon className='mb-5' width={60} height={25} />
				</a>
			</m.li>
		</ul>
	</nav>
)

const DesktopNavbar: FC<{ handleDownload: () => void }> = ({ handleDownload }) => (
	<div className='hidden md:block'>
		<ul className='flex items-center '>
			{/* logo */}
			<m.li
				initial={{
					opacity: 0,
					y: -50
				}}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5
					}
				}}
				className='text-3xl font-extrabold uppercase w-[5rem] p-4 pr-0'
			>
				JM
			</m.li>

			{/* CV */}
			<li className='shadow-3xl py-3 px-7 p-4'>
				<m.button
					initial={{
						opacity: 0,
						y: -50
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2
						}
					}}
					onClick={handleDownload}
					className='flex gap-2 items-center  relative group hover:opacity-75 transition-all duration-300 ease-in-out'
				>
					<Download />
					<div>CV</div>
					<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[180%]'></span>
				</m.button>
			</li>

			{/* contact */}
			<m.li
				initial={{
					opacity: 0,
					y: -50
				}}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						delay: 0.4
					}
				}}
				className='links contact-li cursor-pointer uppercase shadow-3xl py-3 px-3 group hover:opacity-75 transition-all duration-300 ease-in-out p-4'
			>
				<button
					className='contact-link relative'
					onClick={() => {
						window.location.href = 'mailto:jormencar@gmail.com'
					}}
				>
					<span className='absolute bg-white h-[3px] w-0 bottom-[-15px] left-1/2 transition-all duration-300 origin-center transform-gpu -translate-x-1/2 group-hover:w-[120%]'></span>
				</button>
			</m.li>
		</ul>
	</div>
)

const MobileNavbar: FC<{
	showSidebarHandler: () => void
	show: boolean
	handleDownload: () => void
}> = ({ showSidebarHandler, show, handleDownload }) => (
	<nav>
		<div className='md:hidden flex justify-between items-center px-6 py-3'>
			<ul className='flex'>
				<m.li
					className='shadow-3xl '
					initial={{
						opacity: 0,
						y: -50
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5
						}
					}}
				>
					<a href='https://www.linkedin.com/in/jorgeamena/' target='_blank' rel='noreferrer'>
						<LinkedinIcon width={60} height={25} />
					</a>
				</m.li>
				<m.li
					className='shadow-3xl'
					initial={{
						opacity: 0,
						y: -50
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2
						}
					}}
				>
					<a href='https://github.com/aljorgevi' target='_blank' rel='noreferrer'>
						<GithubIcon className='' width={60} height={25} />
					</a>
				</m.li>
			</ul>

			<m.button
				initial={{
					opacity: 0,
					y: -50
				}}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						delay: 0.4
					}
				}}
				className='cursor-pointer'
				onClick={showSidebarHandler}
			>
				<Burger />
			</m.button>
		</div>

		<AnimatePresence>
			{show && (
				<m.div className='w-screen my-4' {...navbarAnimation}>
					<div className='flex flex-col justify-center items-center  h-38rem'>
						<ul>
							<li className='flex justify-center'>
								<button
									onClick={handleDownload}
									className='flex gap-2 items-center group hover:opacity-75 mb-2 relative'
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
				</m.div>
			)}
		</AnimatePresence>
	</nav>
)

export default TopNavbar
