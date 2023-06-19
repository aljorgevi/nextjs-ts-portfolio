import { PROJECTS_TYPES } from '@/constans'
import { type Project } from '@/types/types'

export const projects: Project[] = [
	{
		title: 'Sphera',
		description: `Bespoke Services company with elegant design, showcasing exceptional tailored services. Carefully crafted for seamless user experience, enabling easy navigation and access to relevant information.`,
		image: '/sphera.png',
		linkLive: 'https://sphera.vercel.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Evo Gym',
		description: `Dynamic website for a local gym showcasing state-of-the-art equipment, diverse fitness classes, and a passionate community. Modern design promotes an active lifestyle, with intuitive user experience for easy navigation and access to information.`,
		image: '/evo.png',
		linkLive: 'https://evogym-ts.netlify.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Loki',
		description: `Spanish rent-a-car company in Chile. A user-friendly website, offering effortless and reliable vehicle rentals. Explore vehicles, compare prices, and make reservations seamlessly. Experience exceptional service and attention to detail through our sleek and intuitive design.`,
		image: '/loki.png',
		linkLive: 'https://lokicars.cl/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Rustic Homestead - Airbnb Cabins',
		description: `Website for a rustic Airbnb cabin, meticulously crafted to showcase its unique features. Engage with a seamless reservation form, explore captivating images of the cabin, and immerse yourself in its rustic charm. The website offers an intuitive user experience, inviting visitors to embark on an unforgettable journey of discovery and relaxation.`,
		image: '/rustic.png',
		linkLive: 'https://rustic-homestead-chile.netlify.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Portfolio',
		description: `Personal portfolio website, this portfolio helped me to get my first job as web developer. The website offers a seamless user experience, with intuitive navigation and access to relevant information. The design is modern and elegant, with a minimalist approach to highlight the content.`,
		image: '/aljorgevi.png',
		linkLive: 'https://jorge-secondary-portfolio.netlify.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Ecommerce Furniture',
		description: `Furniture Fantastic, Ecommerce website for a furniture company, offering a wide range of products. The website offers a seamless user experience, with intuitive navigation and access to relevant information. The design is modern and elegant, with a minimalist approach to highlight the content.`,
		image: '/furniture-fantastic.png',
		linkLive: 'https://furniture-fantastic.netlify.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Unsplash Gallery',
		description: `Unsplash Gallery, a website to search for images from Unsplash API. Crated with React, this website offerts infinite scroll and search by keyword.`,
		image: '/unsplash-gallery.webp',
		linkLive: 'https://stock-photos-unsplash.netlify.app/',
		linkRepo: 'https://github.com/aljorgevi/Stock-photos-API',
		type: PROJECTS_TYPES.PROJECT
	},
	{
		title: 'Blog',
		description: `MDXBlog, a blog created with MDX and Gatsby.js. This blog is a personal project to learn about MDX and Gatsby.js.`,
		image: '/blog.webp',
		linkLive: 'https://stock-photos-unsplash.netlify.app/',
		linkRepo: 'https://github.com/aljorgevi',
		type: PROJECTS_TYPES.PROJECT
	},
	{
		title: 'Good Taste Pizza',
		description: `Good Taste Pizza, a website to order pizza online. Minimalist design with a simple and intuitive user experience.`,
		image: '/pizza.webp',
		linkLive: 'https://good-taste-pizza.netlify.app/',
		linkRepo: '',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Jhon Doe Portfolio',
		description: `Jhon Doe Portfolio, a portfolio website for a fictional character. Minimalist design with a simple and intuitive user experience.`,
		image: '/jhon-doe-portfolio.webp',
		linkLive: 'https://jhon-doe-portfolio.netlify.app/',
		linkRepo: 'https://github.com/aljorgevi',
		type: PROJECTS_TYPES.WEB
	},
	{
		title: 'Music Player',
		description: `Music Player, a music player created with React. Created with react, this music player offers a simple and intuitive user experience.`,
		image: '/music-player.webp',
		linkLive: 'https://flow-music-player.netlify.app/',
		linkRepo: 'https://github.com/aljorgevi/react-music-player',
		type: PROJECTS_TYPES.PROJECT
	}
]
