/** @jsx jsx */
import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx } from 'theme-ui';
import Banner from '../components/banner';
import Section from '../components/section';

const HomeView = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			file(relativePath: { eq: "dummy2.jpg" }) {
				childImageSharp {
					fluid {
						aspectRatio
						base64
						src
						srcSet
						sizes
					}
				}
			}
		}
	`);
	return (
		<Fragment>
			<Banner />
			<Section
				imageFluid={data.file.childImageSharp.fluid}
				title="Qui duis et est deserunt aute ipsum veniam commodo tempor laboris qui commodo enim."
				description="Culpa consectetur magna amet aliquip id ipsum."
				direction={0}
			/>
			<Section
				imageFluid={data.file.childImageSharp.fluid}
				title="Qui duis et est deserunt aute ipsum veniam commodo tempor laboris qui commodo enim."
				description="Culpa consectetur magna amet aliquip id ipsum."
				direction={1}
			/>
			<Section
				imageFluid={data.file.childImageSharp.fluid}
				title="Qui duis et est deserunt aute ipsum veniam commodo tempor laboris qui commodo enim."
				description="Culpa consectetur magna amet aliquip id ipsum."
				direction={0}
			/>
		</Fragment>
	);
};

export default HomeView;
