import { Route } from 'react-router'
import { route } from 'ts/interfaces';
import React,{Suspense} from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './App.less';

const Layout  = React.lazy(() => import('views/layout/layout'));

const routerConfig = require('router/home');

function App() {
	return (
		<div className="App">
			<React.Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Router>
						<Switch>
							{
								routerConfig['default'].map((item:route,idx:number)=>{
									if(item.routes){
										return (<Route path={item.path} render={()=>{
											switch (item.name) {
												case 'main':
													return (
														<Layout>
															{
																(item.routes as Array<route>).map((item:route,midx:number)=>{
																	return (<Route path={item.path} component={item.component} key={midx}/>);
																})
															}
														</Layout>
													);
												default:
													return (item.routes as Array<route>).map((item:route,midx:number)=>{
														return (<Route path={item.path} component={item.component} key={midx}/>);
													});
											}
										}} key={idx}></Route>)
									}else{
										return(<Route path={item.path} component={item.component} key={idx}/>)
									}
								})
							}
							<Redirect to='/main/home' />
						</Switch>
					</Router>
				</Suspense>
			</React.Fragment>
		</div>
	);
}

export default App;
