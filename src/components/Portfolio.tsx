'use client'

import Image from 'next/image'

const projects = [
	{
		title: 'Sphera - Beskpoke Services',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		image: '/sphera.png',
		linkLive: 'https://sphera.vercel.app/'
	},
	{
		title: 'Website for a gym',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		image: '/evo.png',
		linkLive: 'https://evogym-ts.netlify.app/'
	},
	{
		title: 'Loki - rent a car',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		image: '/loki.png',
		linkLive: 'https://lokicars.cl/'
	},
	{
		title: 'Rustic Homestead - Airbnb Cabins',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		image: '/rustic.png',
		linkLive: 'https://rustic-homestead-chile.netlify.app/'
	}
]

export function Portfolio() {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-0 gap-16 md:pr-16 md:p-10'>
			{projects.map((project, i) => (
				<Project
					key={i}
					image={project.image}
					title={project.title}
					linkLive={project.linkLive}
					description={project.description}
				/>
			))}
		</section>
	)
}

const Project = ({
	title,
	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.',
	image,
	linkLive,
	linkRepo
}: {
	title: string
	description?: string
	image: string
	linkLive: string
	linkRepo?: string
}) => {
	return (
		<div className='flex flex-col gap-6 items-start'>
			<div className='mb-0 shadow relative overflow-hidden w-[100%]'>
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
			</div>
			<div>
				<h3 className='text-lg uppercase font-semibold'>{title}</h3>

				<div className='[&>a]:border-b-2 [&>a]:border-x-white my-2'>
					<a
						href={linkLive}
						className='mr-4 hover:opacity-70 transition duration-200 ease-in-out '
						target='_blank'
						rel='noopener noreferrer'
					>
						Live
					</a>
					{linkRepo && (
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
