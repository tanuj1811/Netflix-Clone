import React from "react";
import { Route ,Navigate } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={()=> {
                if(!user) {
                    return children;
                }
                if(user) {
                    return(
                        <Navigate to={{
                            pathname: loggedInPath
                        }} />
                    );
                }
            }}
        />
    )
}

export const ProtectedRoute = ({ user, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={( { location }) => {
                if(user){
                    return children;
                }

                if(!user) {
                    return (
                        <Navigate
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }

            } }
        />
    )
}

export const NewIsUserRedirect = ({ user, loggedInPath, children}) => {
    return (user ? <Navigate to={loggedInPath} />:children);
}

export const NewProtectedRoute = ({ user, children, ...rest }) => {
    return (user ? children: <Navigate to='/signin' />);
}