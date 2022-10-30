import { component$ } from '@builder.io/qwik'

export const Input = component$(
	({
		color = 'primary',
		placeholder = '',
		name = '',
		type = 'text',
	}: {
		color: 'primary' | 'secondary'
		placeholder?: string
		name?: string
		type?: HTMLInputElement['type']
	}) => {
		return (
			<div class='w-full relative group-input'>
				<input
					class='bg-transparent w-full p-3 outline-none'
					id={name}
					type={type}
					name={name}
					placeholder={placeholder}
				/>
				<span
					class={
						'bottom-0 left-0 absolute h-0.5 group-input-focus-within:h-2 transition-[bottom,left,height] w-full ' +
						((color == 'primary' && 'bg-cyan-400') || (color == 'secondary' && 'bg-secondary'))
					}
				/>
			</div>
		)
	}
)
