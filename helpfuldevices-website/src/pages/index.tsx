import React from "react";

import Layout from "../layouts/default";
import SEO from "../components/seo";
import HomeView from "../templates/home";

const HomePage = () => (
	<Layout>
		<SEO title="Home" />
		<HomeView />
	</Layout>
);

export default HomePage;
