/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";

import { Props } from "../globals/interfaces";

export default ({ children }: Props) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					navigation {
						link
						label
					}
				}
			}
		}
	`);

	return (
		<div sx={{ height: "100%", width: "100%", pt: 6 }}>
			<Header
				siteTitle={data.site.siteMetadata?.title}
				siteNav={data.site.siteMetadata?.navigation}
			/>
			<main>{children}</main>
		</div>
	);
};
