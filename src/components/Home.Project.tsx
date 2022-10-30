import { component$ } from '@builder.io/qwik'

interface ProjectProps {
	category: string
	brand: string
	description: string
}

export const Project = component$(({ category, brand, description }: ProjectProps) => {
	return (
		<div class='flex items-center flex-col lg:flex-row justify-between gap-8 lg:gap-16'>
			<div class='bg-zinc-800 rounded-md w-full lg:w-auto aspect-video h-40' />
			<div>
				<h2 class='font-bold text-lg'>{category}</h2>
				<h3 class='text-secondary'>{brand}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
})
