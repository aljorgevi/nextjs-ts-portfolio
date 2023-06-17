import Image from 'next/image'

export function Portfolio() {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-0 gap-16 md:pr-16 md:p-10'>
			<Project
				image='/evogym.png'
				title='Website for a gym'
				linkLive='https://evogym-ts.netlify.app/'
			/>
			<Project
				image='/evogym.png'
				title='Website for a gym'
				linkLive='https://jorge-secondary-portfolio.netlify.app/'
			/>
			<Project
				image='/evogym.png'
				title='Website for a gym'
				linkRepo='https://rustic-homestead-chile.netlify.app/'
				linkLive='asas'
			/>
			<Project image='/evogym.png' title='Website for a gym' linkRepo='asa' linkLive='asas' />
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
			<div className='mb-0 shadow relative overflow-hidden'>
				<Image
					// fill
					height={500}
					width={500}
					style={{ objectFit: 'cover' }}
					src={image}
					quality={100}
					className='pointer-events-none select-none'
					alt='Picture of the author'
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
