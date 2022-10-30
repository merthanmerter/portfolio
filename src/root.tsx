import { $, component$, useOnWindow } from '@builder.io/qwik'
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'
import { RouterHead } from './components/Router.Head'
import './global.css'
import '@fontsource/inter'

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCity> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */

	useOnWindow(
		'load',
		$((event) => {
			const e = event.target as Document
			if (e) {
				e.documentElement.lang = 'en'
			}
		})
	)

	return (
		<QwikCity>
			<head>
				<meta charSet='utf-8' />
				<RouterHead />
			</head>
			<body lang='en'>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	)
})
