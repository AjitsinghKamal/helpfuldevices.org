/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";

interface Props {
	siteTitle: string;
}

export default ({ siteTitle }: Props) => (
	<div>
		<p sx={{ fontWeight: "bold", fontSize: 6, mb: 0 }}>{siteTitle}</p>
	</div>
);
