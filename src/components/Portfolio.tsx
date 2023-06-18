'use client'

import Image from 'next/image'
import { motion as m } from 'framer-motion'

const projects = [
	{
		title: 'Sphera',
		description: `Bespoke Services company with elegant design, showcasing exceptional tailored services. Carefully crafted for seamless user experience, enabling easy navigation and access to relevant information.`,
		image: '/sphera.png',
		linkLive: 'https://sphera.vercel.app/'
	},
	{
		title: 'Evo Gym',
		description: `Dynamic website for a local gym showcasing state-of-the-art equipment, diverse fitness classes, and a passionate community. Modern design promotes an active lifestyle, with intuitive user experience for easy navigation and access to information.`,
		image: '/evo.png',
		linkLive: 'https://evogym-ts.netlify.app/'
	},
	{
		title: 'Loki',
		description: `Spanish rent-a-car company in Chile. A user-friendly website, offering effortless and reliable vehicle rentals. Explore vehicles, compare prices, and make reservations seamlessly. Experience exceptional service and attention to detail through our sleek and intuitive design.`,
		image: '/loki.png',
		linkLive: 'https://lokicars.cl/'
	},
	{
		title: 'Rustic Homestead - Airbnb Cabins',
		description: `Website for a rustic Airbnb cabin, meticulously crafted to showcase its unique features. Engage with a seamless reservation form, explore captivating images of the cabin, and immerse yourself in its rustic charm. The website offers an intuitive user experience, inviting visitors to embark on an unforgettable journey of discovery and relaxation.`,
		image: '/rustic.png',
		linkLive: 'https://rustic-homestead-chile.netlify.app/'
	},
	{
		title: 'Portfolio',
		description: `Personal portfolio website, this portfolio helped me to get my first job as web developer. The website offers a seamless user experience, with intuitive navigation and access to relevant information. The design is modern and elegant, with a minimalist approach to highlight the content.`,
		image: '/aljorgevi.png',
		linkLive: 'https://jorge-secondary-portfolio.netlify.app/'
	},
	{
		title: 'Ecommerce Furniture',
		description: `Furniture Fantastic, Ecommerce website for a furniture company, offering a wide range of products. The website offers a seamless user experience, with intuitive navigation and access to relevant information. The design is modern and elegant, with a minimalist approach to highlight the content.`,
		image: '/furniture-fantastic.png',
		linkLive: 'https://furniture-fantastic.netlify.app/'
	}
]

export function Portfolio() {
	return (
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
			{projects.map((project, i) => (
				<Project
					key={i}
					image={project.image}
					title={project.title}
					linkLive={project.linkLive}
					description={project.description}
				/>
			))}
		</m.section>
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
