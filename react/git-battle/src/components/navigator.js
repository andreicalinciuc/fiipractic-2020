import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Nav extends React.Component{
    render(){
        return <div className='navigator'>
        
        <Link to='/' >Home</Link>
        <Link to='/counter'>Counter click</Link>
        <Link to='/formRegister'>Regist User</Link>
        
    </div>
    }
}

export default Nav;