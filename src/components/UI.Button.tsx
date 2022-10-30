import { component$, PropFunction, Slot } from '@builder.io/qwik'

export const Button = component$(
	({
		color,
		type = 'button',
		name,
		...props
	}: {
		color: 'primary' | 'secondary'
		type?: 'button' | 'reset' | 'submit'
		name?: string
		onClick$?: PropFunction<() => void>
	}) => {
		return (
			<button
				onClick$={props.onClick$}
				type={type}
				name={name}
				class='group-button font-bold uppercase relative hover:bg-zinc-800 transition-colors h-12 overflow-hidden select-none'>
				<span class='text-zinc-300 transition-[padding] group-button-hover:translate-x-3 pr-6 pl-6 my-auto group-button-hover:pr-9 group-button-hover:pl-3 h-12 whitespace-nowrap delay-100'>
					<Slot />
				</span>
				<span
					class={
						'bottom-0 left-0 absolute h-0.5 group-button-hover:h-2 transition-[bottom,left,height] w-full ' +
						((color == 'primary' && 'bg-cyan-400') || (color == 'secondary' && 'bg-secondary'))
					}
				/>
			</button>
		)
	}
)
