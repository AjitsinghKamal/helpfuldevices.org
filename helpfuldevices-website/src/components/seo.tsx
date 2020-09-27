import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Meta {
	name?: string;
	property?: string;
	content?: string;
}

interface Props {
	description?: string;
	lang?: string;
	meta?: Meta[];
	title?: string;
}

export default ({ description, lang, meta = [], title }: Props) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
			meta={[
				{
					name: 'description',
					content: metaDescription,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: metaDescription,
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
				{
					name: 'twitter:creator',
					content: site.siteMetadata?.author || '',
				},
				{
					name: 'twitter:title',
					content: title,
				},
				{
					name: 'twitter:description',
					content: metaDescription,
				},
				...meta,
			]}
		>
			<link
				href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&family=Montserrat:wght@500;600;700&display=swap"
				rel="stylesheet"
			></link>
		</Helmet>
	);
};
