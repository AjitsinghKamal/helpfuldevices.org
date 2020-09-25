import React from "react";

import Nav from "./nav";
import Brand from "./brand";

import { NavItem } from "../globals/interfaces";

interface Props {
	siteTitle: string;
	siteNav: NavItem[];
}

const Header = ({ siteTitle, siteNav }: Props) => (
	<header>
		<Brand siteTitle={siteTitle} />
		<Nav items={siteNav} />
	</header>
);

export default Header;
