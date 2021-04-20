import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import SignupPage from './pages/signup'; 
import SigninPage from './pages/signin'; 
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import FeaturePage from './pages/Features'; 
import FaqsPage from './pages/faqs';
import PricingPage from './pages/pricing'; 
import SupportPage from './pages/support';
import IndexPage from './pages';




class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				
				<Switch>
					<Route path="/pricing" component={PricingPage} />
					<Route path="/feature" component={FeaturePage} />
					<Route path="/signup" component={SignupPage} />
					<Route path="/signin" component={SigninPage} />
					<Route path="/contact" component={ContactPage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/faqs" component={FaqsPage} />
					<Route  path="/support" component={SupportPage} />
					<Route path="/" component={IndexPage} />
				</Switch>
				
			</Router>
		);
	}
}

export default App;
