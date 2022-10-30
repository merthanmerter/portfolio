import { component$, useRef, useStore } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'
import NextJsLogo from '../assets/nextjs-logo.svg'
import QwikLogo from '../assets/qwik-logo.svg'
import PrismaLogo from '../assets/prisma-logo.svg'
import ReactLogo from '../assets/react-logo.svg'
import TailwindLogo from '../assets/tailwind-logo.svg'
import FigmaLogo from '../assets/figma-logo.svg'
import AdobeLogo from '../assets/adobe-logo.svg'
import SolidworksLogo from '../assets/solidworks-logo.svg'
import MailIcon from '../assets/mail-icon.svg'
import PlaneIcon from '../assets/plane-icon.svg'
import { useLove } from '~/hooks/useLove'
import { useScrollToView } from '~/hooks/useScrollToView'
import { Button } from '~/components/UI.Button'
import { SectionTitle } from '~/components/Home.SectionTitle'
import { Project } from '~/components/Home.Project'
import { Input } from '~/components/UI.Input'
import { TextArea } from '~/components/UI.TextArea'

import type { RequestHandler } from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ response }) => {
	response.headers.append('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=60')
}

export default component$(() => {
	const animation = useLove({
		name: 'love',
		love: [
			'coffee',
			'my cat',
			'nature',
			'jalapenos',
			'gaming',
			'middle earth',
			'sci-fi',
			'diving',
			'sailing',
			'kermit',
			'my wife',
		],
		hero: ['☕', '🐈', '🌲', '🌶️', '🎮', '🧙', '🚀', '🤿', '⛵', '🐸', '👰'],
		speed: 1500,
	})

	const contact = useStore({
		submit: false,
		error: false,
	})

	const skillsRef = useRef()
	const projectsRef = useRef()
	const workflowRef = useRef()

	const visible = useScrollToView({ skillsRef, projectsRef, workflowRef })

	return (
		<>
			<article class='container py-16 lg:py-32 flex items-start lg:gap-16 relative overflow-x-hidden'>
				<section class='w-full lg:w-2/3 flex flex-col'>
					<p class='font-bold text-xl text-secondary z-10'>Hello, I am</p>
					<p class='text-[5rem] font-bold inline-block -ml-[3px] leading-[4rem] z-10'>Merthan</p>
					<p class='mt-3 font-bold gap-3 print:hidden text-xl'>
						and I love <span class='text-cyan-400'>{animation.love}</span>
						<span class='lg:hidden ml-1'>{animation.hero}</span>
					</p>

					<p class='mt-3'>
						An enthusiastic product designer currently shaping the future of software development by designing smooth
						user-interfaces that promote user interaction with information and data. While traveling around the world.
					</p>
					<div class='flex gap-6 mt-6 print:hidden justify-center lg:justify-start'>
						{/* <a href='#skills'> */}
						<Button color='secondary' onClick$={() => skillsRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
							My Skills
						</Button>
						{/* </a> */}
						<Button color='primary'>Print CV</Button>
					</div>
				</section>
				<section class='hidden lg:table w-1/3 relative print:hidden'>
					<div class='relative -rotate-6 pointer-events-none select-none'>
						<div class='text-[20rem] absolute top-0 right-0 origin-center text-secondary opacity-5 leading-[20rem] font-bold animate-wiggle h-max'>
							{animation.hero}
						</div>
						<div class='hue-rotate-180 text-[20rem] absolute top-0 right-0 origin-center text-cyan-400 opacity-5 leading-[20rem] font-bold animate-wiggleInvert h-max'>
							{animation.hero}
						</div>
					</div>
				</section>
			</article>

			<article
				id='skills'
				ref={skillsRef}
				class={
					'container py-16 lg:py-32 transition-[opacity,transform] duration-500 ease-in ' +
					(visible.skills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-9')
				}>
				<p class='font-bold text-lg mt-3 text-secondary leading-none uppercase'>Stuff I Enjoy</p>
				<div class='flex items-start gap-3 lg:gap-16 relative flex-wrap lg:flex-nowrap'>
					<div class='w-full lg:w-1/2 transition-transform'>
						<h2 class='text-4xl print:text-2xl leading-none font-bold p-0 m-0'>
							Web Development, Graphic Design & Industrial Design
						</h2>
						<div class='grid grid-cols-3 lg:grid-cols-4 gap-0.5 lg:gap-1.5 mt-6'>
							<img src={NextJsLogo} alt='Next.js Logo' class='w-20 h-20' />
							<img src={QwikLogo} alt='Qwik Logo' class='w-20 h-20' />
							<img src={PrismaLogo} alt='Prisma Logo' class='w-20 h-20' />
							<img src={ReactLogo} alt='React Logo' class='w-20 h-20' />
							<img src={TailwindLogo} alt='Tailwind Logo' class='w-20 h-20' />
							<img src={FigmaLogo} alt='Figma Logo' class='w-20 h-20' />
							<img src={AdobeLogo} alt='Adobe Logo' class='w-20 h-20' />
							<img src={SolidworksLogo} alt='Solidworks Logo' class='w-20 h-20' />
						</div>
					</div>
					<div class='w-full lg:w-1/2'>
						<p class='text-left lg:text-justify'>
							I specialize in building complex web applications, leading front-end teams, digital product design and
							developing visual design systems. I enjoy creating effortless user experience and designing delightful
							digital products. The entire process of going from a concept to release and gathering user’s feedback on
							either client’s or my own products is what makes me wake up everyday!
						</p>
						<div class='mt-6 print:hidden text-center lg:text-left'>
							<Link href='case-studies'>
								<Button color='secondary'>Case Studies</Button>
							</Link>
						</div>
					</div>
				</div>
			</article>

			<article
				id='projects'
				ref={projectsRef}
				class='container py-16 lg:py-32 flex items-center gap-16 relative print:break-before-page'>
				<div class='w-full'>
					<SectionTitle label='recent projects' />
					<div
						class={
							'flex flex-col gap-8 transition-[opacity,transform] duration-500 ease-in ' +
							(visible.projects ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-9')
						}>
						<Project
							category='Industrial Design'
							brand='Quup Heating'
							description='I specialize in building complex web applications, leading front-end teams, digital product design and
							developing visual design systems.'
						/>
						<Project
							category='Industrial Design'
							brand='Quup Heating'
							description='I specialize in building complex web applications, leading front-end teams, digital product design and
							developing visual design systems.'
						/>
						<Project
							category='Industrial Design'
							brand='Quup Heating'
							description='I specialize in building complex web applications, leading front-end teams, digital product design and
							developing visual design systems.'
						/>
						<Project
							category='Industrial Design'
							brand='Quup Heating'
							description='I specialize in building complex web applications, leading front-end teams, digital product design and
							developing visual design systems.'
						/>
					</div>
					<div class='w-full text-center lg:text-right mt-9 print:hidden'>
						<Link href='projects'>
							<Button color='primary'>More Projects</Button>
						</Link>
					</div>
					<div class='w-full mt-9 hidden print:block'>
						<span class='text-secondary'>→</span>
						<span class='text-cyan-400'>→</span>
						<span class='text-secondary'>→</span>
						<a href='https://merthanmerter.com' class='ml-3 underline text-zinc-300 text-xs'>
							https://merthanmerter.com
						</a>
						<span class='ml-1 text-zinc-300 text-xs'>for all projects</span>
					</div>
				</div>
			</article>

			<article id='workflow' ref={workflowRef} class='container py-16 print:break-before-page'>
				<SectionTitle label='my workflow' />
				<div
					class={
						'grid lg:grid-cols-3 gap-8 mt-8 transition-[opacity,transform] duration-500 ease-in ' +
						(visible.workflow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-9')
					}>
					<div class='bg-zinc-800 p-6 rounded-md relative overflow-hidden'>
						<span class='text-zinc-300 text-[2rem] font-bold z-10 relative'>Phase #1</span>
						{/* <span class='text-zinc-900 text-[4.5rem] whitespace-nowrap font-bold absolute -bottom-10 opacity-50 -left-5 z-0'>
							Phase #1
						</span> */}
						<ul class='mt-[1rem] relative'>
							<li class='flex justify-between'>
								<span class='font-bold'>Brief</span>
								<span class='text-secondary'>→ Customer</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Moodboard</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Approval</span>
								<span class='text-secondary'>→ Customer</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Set Up Goals</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
						</ul>
					</div>
					<div class='bg-zinc-800 p-6 rounded-md relative overflow-hidden'>
						<span class='text-zinc-300 text-[2rem] font-bold z-10 relative'>Phase #2</span>
						{/* <span class='text-zinc-900 text-[4.5rem] whitespace-nowrap font-bold absolute -bottom-10 opacity-50 -left-5 z-0'>
							Phase #2
						</span> */}
						<ul class='mt-[1rem] relative'>
							<li class='flex justify-between'>
								<span class='font-bold'>Wireframe</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Review Tools</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Approval</span>
								<span class='text-secondary'>→ Customer</span>
							</li>
						</ul>
					</div>
					<div class='bg-zinc-800 p-6 rounded-md relative overflow-hidden'>
						<span class='text-zinc-300 text-[2rem] font-bold z-10 relative'>Phase #3</span>
						{/* <span class='text-zinc-900 text-[4.5rem] whitespace-nowrap font-bold absolute -bottom-10 opacity-50 -left-5 z-0'>
							Phase #3
						</span> */}
						<ul class='mt-[1rem] relative'>
							<li class='flex justify-between'>
								<span class='font-bold'>Proof of Concept</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Testing</span>
								<span class='text-zinc-400'>Both</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Finalize</span>
								<span class='text-cyan-400'>← M.</span>
							</li>
							<li class='flex justify-between'>
								<span class='font-bold'>Approval</span>
								<span class='text-secondary'>→ Customer</span>
							</li>
						</ul>
					</div>
				</div>
			</article>

			<article id='contact' class='container my-8 lg:my-16 print:break-before-page'>
				<div
					class={
						'overflow-hidden rounded-md flex flex-col items-center justify-center lg:mx-32 relative h-[400px] group-contact ' +
						(contact.error && 'animate-wiggleErrorMobile lg:animate-wiggleError')
					}>
					<img
						src={MailIcon}
						alt='Contact'
						class={
							'absolute w-60 h-60 left-6 bottom-6 p-0.5 invert opacity-5 pointer-events-none transition-[opacity,bottom,left] duration-[0.5s] ease-in ' +
							(contact.submit
								? 'bottom-full left-full opacity-0'
								: 'group-contact-hover:bottom-16 group-contact-hover:left-16')
						}
					/>

					{contact.submit ? (
						<div class='animate-fadeIn'>
							<p class='lg:text-2xl text-zinc-400 text-center'>Thank you for your inquiry. I will reply asap!</p>
							<img src={PlaneIcon} class='h-16 !stroke-white animate-bounce mt-24 mx-auto' />
						</div>
					) : (
						<p class='lg:text-2xl text-zinc-400 text-center'>
							If you'd like to talk about a project, drop me a message and I will reply as soon as possible.
						</p>
					)}

					{!contact.submit && (
						<form
							preventdefault:submit
							onSubmit$={async (event: any) => {
								const data = {
									name: event.target.name.value,
									email: event.target.email.value,
									message: event.target.message.value,
								}
								if (data.name && data.email && data.message) {
									console.log(data)
									contact.submit = true
									event.target.reset()
								} else {
									const error = async () => {
										setTimeout(() => {
											contact.error = true
										}, 100)
									}
									await error().then(() => (contact.error = false))
								}
							}}
							class='flex mt-8 flex-col gap-6 items-center justify-center w-full'>
							{/* {contact.error && <p class='text-red-400'>Please fill out all fields</p>} */}
							<Input color='primary' type='text' placeholder='Name' name='name' />
							<Input color='primary' type='email' placeholder='Email' name='email' />
							<TextArea color='primary' placeholder='Message' name='message' />
							<Button type='submit' name='submit' color='secondary'>
								Submit
							</Button>
						</form>
					)}
				</div>
			</article>
		</>
	)
})

export const head: DocumentHead = {
	title: 'merthan',
	meta: [
		{
			name: 'description',
			content: 'Testing description.',
		},
	],
}
