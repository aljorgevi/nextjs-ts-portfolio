import Hero from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'

export default function Home() {
	return (
		<section className='flex min-h-screen flex-col'>
			<Hero />
			<Portfolio />
		</section>
	)
}
