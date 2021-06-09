import './App.css';
import React,{Suspense} from 'react';
import { Route } from 'react-router'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import routerConfig from 'router/index'

// import createBrowserHistory from 'history/createBrowserHistory';
// const customHistory = createBrowserHistory();
// const Home =  require('views/home');
import Home from 'views/home/index'
function App() {
	return (
		<div className="App">
			<React.Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Router>
						<Switch>
							<Route exact path='/home' component={Home} />
							<Redirect exact from='/' to='/home' />
						</Switch>
					</Router>
				</Suspense>
			</React.Fragment>
		</div>
	);
}

export default App;
