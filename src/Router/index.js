import { Switch, Route} from 'react-router-dom'
import Guard from "./Guard"
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Products from "../Pages/Products";
import Details from "../Pages/DtlProducts";
const Router = () => {
    return(
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/login' >
                <Login />
            </Route>
            <Route path='/register' >
                <Register />
            </Route>
            <Guard path='/products' component={Products} />
            <Guard path='/details/:id' component={Details} />
        </Switch>
    )
}
export default Router