import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../ContextProvider/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user , isLoading} = useAuth();
    // if(!isLoading){
    //     return <h1>loading...</h1>
    // }
    console.log(isLoading);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;