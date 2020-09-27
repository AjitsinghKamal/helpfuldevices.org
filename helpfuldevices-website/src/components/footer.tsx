/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Container, Box } from 'theme-ui';

import Nav, { Direction } from './nav';
import Brand from './brand';

import { NavItem } from '../globals/interfaces';

interface Props {
	siteTitle: string;
	siteNav: NavItem[];
}

export default ({ siteTitle, siteNav }: Props) => {
	return (
		<Box as="footer" bg="primary" color="muted" py={5}>
			<Container sx={{ width: '95%' }}>
				<Flex
					sx={{
						height: 'header',
						alignItems: 'flex-start',
					}}
				>
					<Brand siteTitle={siteTitle} fontSize={4} />
					<Box ml={5}>
						<Nav items={siteNav} direction={Direction.vertical} fontSize={2} />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
