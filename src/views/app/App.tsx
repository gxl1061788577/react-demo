import { Route } from 'react-router'
import { route } from 'ts/interfaces';
import React,{Suspense} from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './App.less';
const routerConfig = require('router/home');

function App() {
	return (
		<div className="App">
			<React.Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Router>
						<Switch>
							{
								routerConfig['default'].forEach((item:route)=>{
									<Route exact path={item.path} component={item.component} />
								})
							}
							<Redirect to='/home' />
						</Switch>
					</Router>
				</Suspense>
			</React.Fragment>
		</div>
	);
}

export default App;
