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
		<Box
			as="header"
			bg="primary"
			color="muted"
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 10,
			}}
		>
			<Container sx={{ width: "95%" }}>
				<Flex py={3} sx={{ alignItems: "center", height: "header" }}>
					<Brand siteTitle={siteTitle} />
					<Nav items={siteNav} />
				</Flex>
			</Container>
		</Box>
	);
};
