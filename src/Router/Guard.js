import { Route, Redirect } from "react-router-dom";

const Guard = ({component : Component, ...rest}) =>{
    const islogin = localStorage.getItem('isLogin')
    return(
        <Route {...rest} render={
            (props) => {
                if(islogin === 'true'){
                    return <Component {...props} />
                }else{
                    return (<Redirect to='/' />)
                }
            }
        } />
    )
}
export default Guard
