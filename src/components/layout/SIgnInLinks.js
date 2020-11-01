import React from 'react'
import {NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import './SignInLinks.css'

const SignInLinks = ()=>{
    return(
        <React.Fragment>
            <NavItem>
                <NavLink to={"#"}>New Project</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink to={"#"}>Logout</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink to={"#"} className="logged-in-user-image">
                    NN
                </NavLink>
            </NavItem>
        </React.Fragment>
    )
}

export default SignInLinks;