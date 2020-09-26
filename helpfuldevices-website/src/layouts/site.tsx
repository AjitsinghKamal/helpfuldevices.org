import React from "react";

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
		<>
			<Header
				siteTitle={data.site.siteMetadata?.title}
				siteNav={data.site.siteMetadata?.navigation}
			/>
			<main>{children}</main>
		</>
	);
};
