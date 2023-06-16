export default function Hero() {
	return (
		// TODO: check media queries
		<section className='max-w-[50rem] overflow-hidden p-10'>
			<div>
				<h1 className='text-5xl overflow-hidden font-semibold leading-none uppercase'>
					Jorge Mena,
					<br />
					Frontend Developer
				</h1>
			</div>

			<hr className='w-[32rem] my-8 border-none h-1 text-[#fff] bg-[#fff]' />
			{/* <button>About me</button> */}

			<a
				className='text-center text-sm cursor-pointer block max-w-[14rem] border border-white transition duration-200 ease-in-out py-2 px-4 uppercase tracking-wider'
				href='#'
			>
				Read More
			</a>
		</section>
	)
}
