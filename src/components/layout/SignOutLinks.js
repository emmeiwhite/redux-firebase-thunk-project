import React from 'react'
import {NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'

const SignOutLinks = ()=>{
    return(
        <React.Fragment>
                <NavItem>
                  <NavLink to="signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="signin">Signin</NavLink>
                </NavItem>
        </React.Fragment>
    )
}

export default SignOutLinks; 