import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeBadges from "../pages/HomeBadges";
import BadgeNew from "../pages/BadgeNew";
import BadgeDetails from "../pages/BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
// import { router } from "json-server";
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomeBadges} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route exact path="/badges/:badgeId" component={BadgeDetails} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
