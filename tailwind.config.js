/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotate = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-x-45': {
			transform: 'rotateX(45deg)',
		},
		'.rotate-y-45': {
			transform: 'rotateY(45deg)',
		},
	})
})

module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
	theme: {
		container: {
			center: true,
			// padding: {
			// 	sm: '1rem',
			// 	md: '2rem',
			// 	lg: '2rem',
			// },
			padding: '1rem',
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 768px) { ... }

			// lg: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				primary: '#EAEAEA',
				secondary: '#FF008A',
			},
			animation: {
				flip: '1s flip ease infinite',
				wiggle: 'wiggle 300ms infinite',
				wiggleInvert: 'wiggleInvert 150ms infinite',
				fadeIn: 'fadeIn 1.5s ease-in',
				wiggleError: 'wiggleError 150ms ease-in',
				wiggleErrorMobile: 'wiggleErrorMobile 150ms ease-in',
			},
			keyframes: {
				flip: {
					'0%': {
						transform: 'rotateX(0deg)',
					},
					'25%': {
						transform: 'rotateX(90deg)',
					},
					'50%': {
						transform: 'rotateX(180deg)',
					},
				},
				wiggle: {
					'0%': { transform: 'translate(3px, 0px)', opacity: 0.1 },
					'20%': { transform: 'translate(-3px, 0px)' },
					'40%': { transform: 'translate(3px, 0px)', top: '5px' },
					'60%': { transform: 'translate(-3px, 0px)' },
					'80%': { transform: 'translate(3px, 0px)' },
					'100%': { transform: 'translate(0px, 0px)', top: '5px' },
				},
				wiggleInvert: {
					'0%': { transform: 'translate(-3px, 0px)', opacity: 0.1 },
					'20%': { transform: 'translate(3px, 0px)' },
					'40%': { transform: 'translate(-3px, 0px)', bottom: '5px' },
					'60%': { transform: 'translate(3px, 0px)' },
					'80%': { transform: 'translate(-3px, 0px)' },
					'100%': { transform: 'translate(0px, 0px)', bottom: '5px' },
				},
				wiggleError: {
					'0%': { transform: 'translate(30px, 0px)' },
					'20%': { transform: 'translate(-30px, 0px)' },
					'40%': { transform: 'translate(30px, 0px)' },
					'60%': { transform: 'translate(-30px, 0px)' },
					'80%': { transform: 'translate(30px, 0px)' },
					'100%': { transform: 'translate(0px, 0px)' },
				},
				wiggleErrorMobile: {
					'0%': { transform: 'translate(10px, 0px)' },
					'20%': { transform: 'translate(-10px, 0px)' },
					'40%': { transform: 'translate(10px, 0px)' },
					'60%': { transform: 'translate(-10px, 0px)' },
					'80%': { transform: 'translate(10px, 0px)' },
					'100%': { transform: 'translate(0px, 0px)' },
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [rotate, require('tailwindcss-labeled-groups')(['button', 'contact', 'input', 'textarea'])],
}
