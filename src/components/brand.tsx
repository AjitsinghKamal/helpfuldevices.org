import React from "react";

interface Props {
	siteTitle: string;
}

const Header = ({ siteTitle }: Props) => <div>{siteTitle}</div>;

export default Header;
