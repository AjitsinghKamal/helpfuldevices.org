/** @jsx jsx */

import React from 'react';
import { jsx, Flex, Container, Box } from 'theme-ui';

import { Link } from 'gatsby';
import { NavItem } from '../globals/interfaces';

export enum Direction {
	horizontal,
	vertical,
}
interface Props {
	items?: NavItem[];
	direction?: Direction;
	fontSize?: number;
}

export default ({
	items = [],
	direction = Direction.horizontal,
	fontSize = 3,
}: Props) => {
	return (
		<Flex
			as="nav"
			ml={5}
			sx={{
				flexDirection: direction === Direction.horizontal ? 'row' : 'column',
			}}
		>
			{items.map((item: NavItem, index: number) => (
				<Link
					to={item.link}
					key={index}
					sx={{
						fontSize,
						fontFamily: 'heading',
						fontWeight: 'medium',
						mr: direction === Direction.horizontal ? 4 : 0,
						mb: direction === Direction.vertical ? 3 : 0,
					}}
				>
					{item.label}
				</Link>
			))}
		</Flex>
	);
};
