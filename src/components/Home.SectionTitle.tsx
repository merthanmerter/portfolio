import { component$ } from '@builder.io/qwik'

export const SectionTitle = component$(({ label }: { label: string }) => {
	return (
		<div class='relative'>
			<span class='text-5xl text-secondary absolute leading-none font-bold p-0 mb-8 z-0 -left-2 -top-2 opacity-20 animate-pulse'>
				{label}
			</span>
			<span class='text-5xl text-cyan-600 absolute leading-none font-bold p-0 mb-8 z-0 left-2 top-2 opacity-20 animate-pulse'>
				{label}
			</span>
			<h2 class='text-5xl leading-none font-bold p-0 mb-8 z-10 relative'>{label}</h2>
		</div>
	)
})
