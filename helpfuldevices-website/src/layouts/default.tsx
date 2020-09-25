import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";

const DefaultLayout = ({ children }) => {
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
	console.log(data.site.siteMetadata);
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

export default DefaultLayout;
