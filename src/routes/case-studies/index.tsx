/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik'

export default component$(() => {
	const github = useStore({
		user: 'merthanmerter',
	})

	const reposResource = useResource$<string[]>(({ track, cleanup }) => {
		track(github, 'user')

		const controller = new AbortController()
		cleanup(() => controller.abort())

		return getRepositories(github.user, controller)
	})

	console.log('Render')
	return (
		<div class='my-16 container'>
			<span>
				GitHub username:
				<input value={github.user} onInput$={(ev) => (github.user = (ev.target as HTMLInputElement).value)} />
			</span>
			<div>
				<Resource
					value={reposResource}
					onPending={() => <>Loading...</>}
					onRejected={(error) => <>Error: {error.message}</>}
					onResolved={(repos) => (
						<ul>
							{repos.map((repo) => (
								<li>
									<a href={`https://github.com/${github.user}/${repo}`}>{repo}</a>
								</li>
							))}
						</ul>
					)}
				/>
			</div>
		</div>
	)
})

export async function getRepositories(username: string, controller?: AbortController): Promise<string[]> {
	console.log('FETCH', `https://api.github.com/users/${username}/repos`)
	const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
		signal: controller?.signal,
	})
	console.log('FETCH resolved')
	const json = await resp.json()
	return Array.isArray(json) ? json.map((repo: { name: string }) => repo.name) : Promise.reject(json)
}
