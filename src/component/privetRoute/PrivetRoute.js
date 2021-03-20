import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';


const PrivetRoute = ({children, ...rest}) => {
    const [loginUser] = useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loginUser.email ? (
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

export default PrivetRoute;