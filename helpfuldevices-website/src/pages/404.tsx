import React from "react";

import Site from "../layouts/site";
import SEO from "../components/seo";

const NotFoundPage = () => (
	<Site>
		<SEO title="404: Not found" />
		<h1>404: Not Found</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Site>
);

export default NotFoundPage;
