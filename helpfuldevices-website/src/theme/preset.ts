const FONT_SIZE_BASE = 18;

const PALETTE_DEFAULT = {
	text: '#3e3e3e',
	background: '#fbfbfb',
	primary: '#4d4dff',
	secondary: '#3655b3',
	tertiary: '#d3deff',
	accent: '#ffb84d',
	highlight: '#b38136',
	muted: '#f3f6fc',
};
const SPACE_SCALE = [0, 4, 8, 16, 32, 64, 80, 128, 256, 512];

const convertToRem = (point: number) => {
	const converted =
		Math.round((point / FONT_SIZE_BASE + Number.EPSILON) * 100) / 100;
	return `${converted}rem`;
};

export default {
	useCustomProperties: true,
	breakpoints: ['40em', '52em', '64em'],
	space: SPACE_SCALE,
	fonts: {
		body: `Asap, Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif`,
		heading: "'Montserrat', sans-serif",
	},
	fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 40, 48, 64].map(convertToRem),
	fontWeights: {
		body: 400,
		heading: 700,
		medium: 500,
		bold: 600,
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
			fontSize: 4,
			backgroundColor: 'background',
		},
		h1: {
			variant: 'text.heading',
			fontSize: 9,
		},
		h2: {
			variant: 'text.heading',
			fontSize: 8,
		},
		h3: {
			variant: 'text.heading',
			fontSize: 7,
		},
		h4: {
			variant: 'text.heading',
			fontSize: 6,
		},
		h5: {
			variant: 'text.heading',
			fontSize: 5,
		},
		h6: {
			variant: 'text.heading',
			fontSize: 4,
		},
		p: {
			variant: 'text.medium',
			fontSize: 4,
		},
	},
	sizes: {
		container: 1140,
		header: SPACE_SCALE[6],
	},
	shadows: {
		header: `0 1px 2px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12)`,
		higlights: `0 1px 2px rgba(0,0,0,0.12),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)`,
	},
};
