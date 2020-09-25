import React from "react";

import { Link } from "gatsby";
import { NavItem } from "../globals/interfaces";

interface Props {
	items?: NavItem[];
}

export default function Nav({ items }: Props) {
	return (
		<nav>
			{items.map((item: NavItem, index: number) => (
				<Link to={item.link} key={index}>
					{item.label}
				</Link>
			))}
		</nav>
	);
}
