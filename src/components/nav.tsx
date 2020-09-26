/** @jsx jsx */

import React from "react";
import { jsx, Flex, Container, Box } from "theme-ui";

import { Link } from "gatsby";
import { NavItem } from "../globals/interfaces";

interface Props {
	items?: NavItem[];
}

export default ({ items = [] }: Props) => {
	return (
		<Flex as="nav" ml={4}>
			{items.map((item: NavItem, index: number) => (
				<Link to={item.link} key={index} sx={{ fontWeight: "medium" }}>
					{item.label}
				</Link>
			))}
		</Flex>
	);
};
