import React from "react";

import Site from "../layouts/site";
import SEO from "../components/seo";
import HomeView from "../templates/home";

export default () => (
	<Site>
		<SEO title="Home" />
		<HomeView />
	</Site>
);
