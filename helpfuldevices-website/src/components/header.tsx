/** @jsx jsx */
import React from "react";
import { jsx, Flex, Container, Box } from "theme-ui";

import Nav from "./nav";
import Brand from "./brand";

import { NavItem } from "../globals/interfaces";

interface Props {
	siteTitle: string;
	siteNav: NavItem[];
}

export default ({ siteTitle, siteNav }: Props) => {
	return (
		<Box as="header" bg="primary" color="muted">
			<Container>
				<Flex p={3} sx={{ alignItems: "center", height: "header" }}>
					<Brand siteTitle={siteTitle} />
					<Nav items={siteNav} />
				</Flex>
			</Container>
		</Box>
	);
};
