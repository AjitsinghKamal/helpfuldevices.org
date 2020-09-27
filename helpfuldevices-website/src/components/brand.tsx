/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

interface Props {
	siteTitle: string;
	fontSize?: number;
}

export default ({ siteTitle, fontSize = 6 }: Props) => (
	<div>
		<p
			sx={{
				fontWeight: 'heading',
				fontSize,
				mb: 0,
				fontFamily: 'body',
				letterSpacing: '1.2px',
				wordSpacing: '5px',
				textTransform: 'uppercase',
			}}
		>
			{siteTitle}
		</p>
	</div>
);
