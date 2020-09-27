/** @jsx jsx */

import React from 'react';
import { jsx, Flex, Container, Box, Styled } from 'theme-ui';

export default ({}) => (
	<Box bg="tertiary" p={4}>
		<Container sx={{ width: ['60%'] }}>
			<Flex
				sx={{
					minHeight: `calc(100vh - 144px)`,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Styled.h1 sx={{ textAlign: 'center' }}>
					Qui qui deserunt reprehenderit ut ad deserunt enim mollit commodo et
					laboris consectetur.
				</Styled.h1>
				<Styled.p sx={{ textAlign: 'center' }}>
					In sint nisi labore sit officia nulla qui. Esse ipsum cupidatat
					incididunt anim commodo. Amet nostrud reprehenderit Lorem et eiusmod
					id aute culpa fugiat culpa id. Consequat esse duis cupidatat nisi
					officia sit. Consectetur cillum duis elit amet pariatur. Esse do magna
					voluptate aliqua non cillum nisi ea id exercitation eu.
				</Styled.p>
			</Flex>
		</Container>
	</Box>
);
