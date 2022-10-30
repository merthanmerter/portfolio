import { $, component$, Slot, useOnWindow, useStore } from '@builder.io/qwik'
import GithubIcon from '../assets/github-icon.svg'
import TwitterIcon from '../assets/twitter-icon.svg'
import MailIcon from '../assets/mail-icon.svg'
import TailwindIcon from '../assets/tailwind-icon.svg'

export default component$(() => {
	const text = useStore({
		color: 'text-zinc-300',
	})

	useOnWindow(
		'scroll',
		$(() => {
			text.color = 'text-zinc-700'
		})
	)

	return (
		<>
			<main>
				{/* <Header /> */}
				<nav class='print:hidden w-full bg-zinc-900 z-50 fixed'>
					<div class='container h-12 items-center flex gap-6 justify-end lg:justify-between'>
						{/* <p class='text-lg'>{'rth()'}</p> */}
						<code class={'hidden lg:block text-xs uppercase font-bold transition-colors ' + text.color}>
							personal portfolio & resume of merthan merter
						</code>
						<div class='inline-block'>
							<a title='github: @merthanmerter' href='https://github.com/merthanmerter' target='_blank'>
								<img
									src={GithubIcon}
									alt='Github'
									class='inline w-6 h-6 mr-4 invert opacity-50 hover:opacity-75 transition-opacity'
								/>
							</a>
							<a title='twitter: @merthan_merter' href='https://twitter.com/merthan_merter' target='_blank'>
								<img
									src={TwitterIcon}
									alt='Twitter'
									class='inline w-6 h-6 mr-4 invert opacity-50 hover:opacity-75 transition-opacity'
								/>
							</a>
							<a title='contact' href='#contact'>
								<img
									src={MailIcon}
									alt='Contact'
									class='inline w-6 h-6 p-0.5 invert opacity-50 hover:opacity-75 transition-opacity'
								/>
							</a>
						</div>
					</div>
				</nav>
				<Slot />
			</main>
			<footer class='print:hidden w-full'>
				<div class='container h-16 items-center flex gap-6 justify-center'>
					<code class={'text-xs uppercase font-bold transition-colors ' + text.color}>
						Made with ❤️ using Qwik ⚡️ and tailwindcss{' '}
						<img class='inline mb-[0.3rem] h-[0.9rem] w-[0.9rem]' alt='tailwindcss logo' src={TailwindIcon} />
					</code>
				</div>
			</footer>
		</>
	)
})
