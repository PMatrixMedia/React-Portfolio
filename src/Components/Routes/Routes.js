import react from 'react';
import {Route, IndexRoute, BrowserRouter} from 'react-router';
import Intro from '../Intro/Intro';
import Template from '../Template/Template';
import About from '../../Pages/About/About' ;

const createRoutes = () => {
    return (
        <BrowserRouter>
        <Route
        path={'/'}
        component={Template}>
            <IndexRoute
                component={Intro}/>
                <Route
                    path={'/about'}
                    component={About}/>
                <Route
                    path={'/VR'}
                    component={VR}/>
                 </Route>
        </BrowserRouter>
    )
}
    const Routes = createRoutes()
    
export default Routes;