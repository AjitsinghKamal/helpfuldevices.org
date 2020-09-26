import React from "react";
import { ThemeProvider } from "theme-ui";

import { Props } from "../globals/interfaces";

import themePreset from "./preset";

interface RootProps {
	element: React.ReactNode;
}
const Root = ({ children }: Props) => {
	return <ThemeProvider theme={themePreset}>{children}</ThemeProvider>;
};

export default ({ element }: RootProps) => {
	return <Root>{element}</Root>;
};
