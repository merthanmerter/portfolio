import { component$ } from '@builder.io/qwik'

export const TextArea = component$(
	({
		color = 'primary',
		placeholder = '',
		name = '',
	}: {
		color: 'primary' | 'secondary'
		placeholder?: string
		name?: string
		type?: HTMLInputElement['type']
	}) => {
		return (
			<div class='w-full relative group-textarea'>
				<textarea class='bg-transparent w-full p-3 outline-none' id={name} name={name} placeholder={placeholder} />
				<span
					class={
						'bottom-0 left-0 absolute h-0.5 group-textarea-focus-within:h-2 transition-all w-full ' +
						((color == 'primary' && 'bg-cyan-400') || (color == 'secondary' && 'bg-secondary'))
					}
				/>
			</div>
		)
	}
)
