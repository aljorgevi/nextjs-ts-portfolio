'use client'

import { useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { contentAnimation } from '@/utils/animations'
import { useMediaQuery } from '@/app/hooks/useMediaQuery'

export default function Hero() {
	const [showAbout, setShowAbout] = useState(false)
	const desktop = useMediaQuery('(min-width: 768px)')

	return (
		<section className='max-w-[50rem] overflow-hidden md:p-10'>
			{desktop ? <DesktopTitle /> : <MobileTitle />}

			<hr className='w-[32rem] my-8 border-none h-1 text-[#fff] bg-[#fff]' />

			<button
				className={`text-center text-sm cursor-pointer block w-[14rem] border
			border-white transition duration-200 ease-in-out py-2 px-4 uppercase tracking-wider
			hover:bg-[#fff] hover:text-[#191919] z-40`}
				onClick={() => setShowAbout(!showAbout)}
			>
				About me
			</button>

			<AnimatePresence>
				{showAbout && (
					<m.article className='[&>p]:mb-4 z-[-10] relative' {...contentAnimation}>
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
							Throughout my 1.5 years of experience, I have honed my skills in JavaScript,
							Typescript, React, and Java. Staying at the forefront of the industry, I embrace the
							latest advancements, including data structures, programming patterns, and algorithms.
							I am driven by a passion for continuous learning and always eager to embrace new
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
	<div>
		<div className='text-5xl overflow-hidden font-extrabold leading-none uppercase'>
			<p>Jorge</p>
			<p>Mena, </p>
			<p>Software</p>
			<p>Engineer</p>
		</div>
	</div>
)

const DesktopTitle = () => (
	<div>
		<div className='text-5xl overflow-hidden font-extrabold leading-none uppercase'>
			Jorge Mena,
			<br />
			Software Engineer
		</div>
	</div>
)
