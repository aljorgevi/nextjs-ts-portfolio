'use client'

import Image from 'next/image'
import { motion as m } from 'framer-motion'
import { FC, useState } from 'react'
import { Project, ProjectType } from '@/types/types'
import { projects } from '@/data/projects'

export function Portfolio() {
	const [active, setActive] = useState<ProjectType>('web')

	function handleFilterChange(filter: ProjectType) {
		setActive(filter)
	}

	return (
		<section>
			<CardFilter onClick={handleFilterChange} active={active} />
			<m.section
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
				className='grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-0 gap-16 md:pr-16 md:p-10'
			>
				{projects
					.filter(project => project.type === active || active === 'all')
					.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
			</m.section>
		</section>
	)
}

const ProjectCard: FC<Project> = ({
	title,
	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.',
	image,
	linkLive,
	linkRepo,
	type
}) => {
	return (
		<div className='flex flex-col gap-6 items-start'>
			<a
				href={linkLive}
				target='_blank'
				rel='noopener noreferrer'
				className='mb-0 shadow relative overflow-hidden w-[100%]
				hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer
			'
			>
				<Image
					src={image}
					quality={100}
					className='pointer-events-none select-none'
					alt='Picture of the author'
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto' }} // optional
				/>
			</a>
			<div>
				<a
					href={linkLive}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:opacity-70 transition duration-200 ease-in-out'
				>
					<h3 className='text-xl uppercase font-bold'>{title}</h3>
				</a>

				<div className='[&>a]:border-b-2 [&>a]:border-x-white my-2'>
					<a
						href={linkLive}
						className='mr-4 hover:opacity-70 transition duration-200 ease-in-out '
						target='_blank'
						rel='noopener noreferrer'
					>
						Live
					</a>
					{Boolean(linkRepo) && (
						<a
							href={linkRepo}
							className='hover:opacity-70 transition duration-200 ease-in-out'
							target='_blank'
							rel='noopener noreferrer'
						>
							Github
						</a>
					)}
				</div>

				<p className='max-w-lg'>{description}</p>
			</div>
		</div>
	)
}

const CardFilter = ({
	onClick,
	active
}: {
	onClick: (filter: ProjectType) => void
	active: ProjectType
}) => {
	return (
		<m.div
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
			className='uppercase mt-4 max-w-[14rem] md:max-w-none md:pl-[2.25rem] inline-block'
		>
			<div className='flex overflow-hidden  border border-[#fff] divide-x  rtl:flex-row-reverse bg-[#191919]  divide-[#fff]'>
				<button
					onClick={() => onClick('web')}
					className={`px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6  text-gray-300 hover:bg-[#fff] hover:text-[#191919]
					${active === 'web' && 'bg-[#fff] text-[#191919]'}
					`}
				>
					Web
				</button>

				<button
					onClick={() => onClick('project')}
					className={`px-4 py-2 text-sm font-medium  transition-colors duration-200 sm:text-base sm:px-6  text-gray-300 hover:bg-[#fff] hover:text-[#191919]
					${active === 'project' && 'bg-[#fff] text-[#191919]'}
					`}
				>
					Projects
				</button>

				<button
					onClick={() => onClick('all')}
					className={`px-4 py-2 text-sm font-medium  transition-colors duration-200 sm:text-base sm:px-6  text-gray-300 hover:bg-[#fff] hover:text-[#191919]
					${active === 'all' && 'bg-[#fff] text-[#191919]'}
					`}
				>
					All
				</button>
			</div>
		</m.div>
	)
}
