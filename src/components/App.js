import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeBadges from '../pages/HomeBadges'
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "../components/Layout";
import NotFound from '../pages/NotFound'
// import { router } from "json-server";
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path ="/" component ={HomeBadges}/>
          <Route component={NotFound }/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
