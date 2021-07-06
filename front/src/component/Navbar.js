
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../action/authentification';
import { withRouter } from 'react-router-dom';
// import Chacun from './chacun';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        test:""
    };
  }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      componentDidMount(){
        this.setState({test:localStorage.getItem('sary')})
      console.log(localStorage.getItem('sary'));
      }

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
          <div >
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
             <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav navbar-sidenav">
                <li class="nav-item">
                <Link class="nav-link sidesthrd li" to="/">
                    <span class="textside">Liste</span>
                </Link>
                </li>
            
            
            </ul>
            
            <ul class="navbar-nav2 ml-auto">
                <li >
                <a  class="dropdown-toggle" > </a>
                    <ul >
                        <li class="resflset li"><a href="#"  to='/login' onClick={this.onLogout.bind(this)} ><i     class="fa fa-fw fa-power-off"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
            
            </div>
            </nav>

        <div className="espace">


        </div>
        </div>
                )
            const guestLinks = (
                // <ul className="navbar-nav ml-auto">
                //     {/* <li className="nav-item">
                //         <Link className="nav-link" to="/register">Sign Up</Link>
                //     </li> */}
                //     <li className="nav-item">
                //     <Link className="navbar-brand" to="/client">Home</Link>
                //     </li>
                //     <li className="nav-item">
                //         <Link className="nav-link" to="/login">Sign In</Link>
                //     </li>
                    
                // </ul>
                <div>
            <div>
        <MDBNavbar    expand="md" >
                    
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            <MDBNavItem>
        
        </MDBNavItem>
        <MDBNavItem>
        
        <MDBNavLink to="/register" >register</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
        
        <MDBNavLink to="/" >Accueil</MDBNavLink>
        </MDBNavItem> 
            <MDBNavItem>
            
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            
            <MDBNavItem>
        
        <MDBNavLink to="/login" id='regist'>conecter</MDBNavLink>
        </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        </div>
        

   
   </div>

      )
        return(
            
                
                <div id="navbarSupportedContent"  >
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));