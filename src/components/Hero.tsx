'use client'

import { useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { heroAnimation } from '@/utils/animations'

export default function Hero() {
	const [showAbout, setShowAbout] = useState(false)

	return (
		<section className='max-w-[50rem] overflow-hidden md:p-10'>
			<DesktopTitle />
			<MobileTitle />
			<m.hr
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1,

					transition: {
						duration: 0.5,
						delay: 0.9
					}
				}}
				className='w-[20rem] md:w-[32rem] my-8 border-none h-1 text-[#fff] bg-[#fff]'
			/>
			<m.button
				initial={{
					y: -50,
					opacity: 0
				}}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						delay: 0.8
					}
				}}
				className={`text-center text-sm cursor-pointer block w-[14rem] border
			border-[#fff] transition duration-200 ease-in-out py-2 px-4 uppercase tracking-wider
			hover:bg-[#fff] hover:text-[#191919] z-40`}
				onClick={() => setShowAbout(!showAbout)}
			>
				{showAbout ? 'Unmasking the Enigma!' : 'about me'}
			</m.button>
			<AnimatePresence>
				{showAbout && (
					<m.article className='[&>p]:mb-4 z-[-10] relative' {...heroAnimation}>
						<h2 className='text-2xl font-semibold mt-8'>
							Engaging Developer with a Business Engineering Perspective
						</h2>
						<p className='text-[#fff] mt-4'>
							Unlocking success and growth for organizations is my expertise as a seasoned developer
							with a strong background in Business Engineering. With a deep understanding of
							business operations and a mastery of technology, I deliver tailored solutions that
							drive tangible results.
						</p>
						<p>
							Throughout my years of experience, I have honed my skills in JavaScript, Typescript,
							React, and Java. Staying at the forefront of the industry, I embrace the latest
							advancements, including data structures, programming patterns, and algorithms. I am
							driven by a passion for continuous learning and I am always eager to embrace new
							technologies.
						</p>
						<p>
							As a Business Engineer, I excel in various areas of business development, encompassing
							team leadership and social media management. My diverse skill set positions me as a
							valuable asset, capable of contributing to every aspect of a project.
						</p>
						<p>
							Dedicated and driven, I am always seeking fresh challenges to further expand my skill
							set in the dynamic IT sector. Let's connect and explore how I can help propel your
							organization to new heights.
						</p>
					</m.article>
				)}
			</AnimatePresence>
		</section>
	)
}

const MobileTitle = () => (
	<m.div
		className='md:hidden'
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1,

			transition: {
				duration: 0.5,
				delay: 0.6
			}
		}}
	>
		<div className='text-4xl xsm:text-5xl overflow-hidden font-extrabold leading-none uppercase'>
			<p>Jorge</p>
			<p>Mena, </p>
			<p>Software</p>
			<p>Engineer</p>
		</div>
	</m.div>
)

const DesktopTitle = () => (
	<m.div
		className='hidden md:block'
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1,

			transition: {
				duration: 0.5,
				delay: 0.9
			}
		}}
	>
		<div className='text-5xl overflow-hidden font-extrabold leading-none uppercase'>
			Jorge Mena,
			<br />
			Software Engineer
		</div>
	</m.div>
)
