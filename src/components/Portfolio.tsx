import Image from 'next/image'

export function Portfolio() {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 gap-16 pr-16 p-10'>
			<Project image='/evogym.png' title='Website for a gym' linkRepo='asa' linkLive='asas' />
			<Project image='/evogym.png' title='Website for a gym' linkRepo='asa' linkLive='asas' />
			<Project image='/evogym.png' title='Website for a gym' linkRepo='asa' linkLive='asas' />
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
	linkRepo: string
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
					<a
						href={linkRepo}
						className='hover:opacity-70 transition duration-200 ease-in-out'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
				</div>

				<p>{description}</p>
			</div>
		</div>
	)
}
