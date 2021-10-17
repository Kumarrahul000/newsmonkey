



import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler, Nav, NavbarBrand} from 'reactstrap';
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import About from "./About";
import News from './News';
import Contact from "./Contact";
import LogIn from "./LogIn";
import Slider from "./Slider" 
import SignUp from './SignUp';



const Navbars = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
                  
            <Router>
                <Navbar color=" blue" light expand="md">
                    <div className="container">
                    <NavbarBrand href="/">NEWS</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                       

                                <li className="nav-align">

                                    <Link exact to="/">News</Link>

                                </li>

                                <li className="nav-align">

                                    <Link exact to="/about">About</Link>

                                </li>

                                <li className="nav-align">

                                    <Link exact to="/contact">Contact</Link>

                                </li>

                                <li className="nav-align">

                                    <Link exact to="/login">Log in</Link>

                                </li>
                                <li className="nav-align">

<Link exact to="/signup"></Link>

</li>
                            </Nav>

                        </Collapse>
                   
                    </div>
                </Navbar>
                <Slider/> 

<Switch>
   
            <Route exact path ="/" component={News}></Route>
                <Route exact path ="/about" component={About}></Route>
                <Route exact path ="/contact" component={Contact}></Route>
                <Route exact path ="/login" component={LogIn}></Route>
                <Route exact path ="/signup" component={SignUp}></Route>
           
</Switch>
            </Router>
               
          
        </div>
    );
}

export default Navbars