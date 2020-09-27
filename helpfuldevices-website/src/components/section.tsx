/** @jsx jsx */

import React from 'react';
import { jsx, Styled, Box, Container, Flex } from 'theme-ui';

import Img, { FluidObject } from 'gatsby-image';

enum Direction {
	ltr,
	rtl,
}
interface Props {
	imageFluid?: FluidObject;
	title?: string;
	description?: string;
	direction?: Direction.ltr | Direction.rtl;
}

export default ({
	imageFluid,
	title,
	description,
	direction = Direction.ltr,
}: Props) => (
	<Box as="section" py={7} sx={{ position: 'relative' }}>
		<Box
			bg="secondary"
			sx={{
				position: 'absolute',
				left: direction === Direction.ltr ? 0 : 'auto',
				right: direction === Direction.rtl ? 0 : 'auto',
				height: '50%',
				width: '40%',
				top: '60%',
				transform: 'translateY(-50%)',
				zIndex: 0,
			}}
		/>
		<Container py={5} sx={{ position: 'relative' }}>
			<Flex
				sx={{
					width: '100%',
					height: '100%',
					flexDirection: direction === Direction.ltr ? 'row' : 'row-reverse',
				}}
			>
				<Box
					mr={direction === Direction.ltr ? 5 : 0}
					ml={direction === Direction.rtl ? 5 : 0}
					sx={{
						flex: '0 1 50%',
						alignSelf: 'stretch',
						borderRadius: '20px',
						overflow: 'hidden',
						boxShadow: 'higlights',
					}}
				>
					{imageFluid && (
						<Img fluid={imageFluid} alt="A corgi smiling happily" />
					)}
				</Box>
				<Box sx={{ flex: '1 0' }}>
					<Styled.h3>{title}</Styled.h3>
					<Styled.p>{description}</Styled.p>
				</Box>
			</Flex>
		</Container>
	</Box>
);
