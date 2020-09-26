const FONT_SIZE_BASE = 18;
const PALETTE_DEFAULT = {
	text: '#3e3e3e',
	background: '#fbfbfb',
	primary: '#4d4dff',
	secondary: '#3655b3',
	tertiary: '#d3deff',
	accent: '#ffb84d',
	highlight: '#b38136',
	muted: '#f3f6fc'
};
const convertToRem = (point:number) => {
	const converted =
	Math.round(((point/FONT_SIZE_BASE) + Number.EPSILON) * 100) / 100
	return `${converted}rem`
}
export default {
	useCustomProperties: true,
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64].map(convertToRem),
	fontWeights: {
		body: 400,
		heading: 700,
		medium: 600,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		...PALETTE_DEFAULT,
	},
	text: {
		heading: {
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			backgroundColor: 'background'
		},
		h1: {
			variant: 'text.heading',
			fontSize: 5,
		},
		h2: {
			variant: 'text.heading',
			fontSize: 4,
		},
		h3: {
			variant: 'text.heading',
			fontSize: 3,
		},
		h4: {
			variant: 'text.heading',
			fontSize: 2,
		},
		h5: {
			variant: 'text.heading',
			fontSize: 1,
		},
		h6: {
			variant: 'text.heading',
			fontSize: 0,
		},
	},
	sizes: {
		container: 1140,
		header: 75
	}
};