import React from 'react';
import {
  Navigation,
  NavigationLink,
  Bars,
  NavigationMenu,
  NavigationButton,
  NavigationButtonLink
} from './NavbarElements';
import logo from './logo.svg'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Navigation>
        <NavigationLink to='/'>
          <img src={logo} alt='logo' />
        </NavigationLink>
        <Bars onClick={toggle} />
        <NavigationMenu>
          <NavigationLink to='/about' activeStyle>
            About
          </NavigationLink>
          <NavigationLink to='/rick-and-morty' activeStyle>
            Rick and Morty API
          </NavigationLink>
          <NavigationLink to='/sign-up' activeStyle>
            Sign Up
          </NavigationLink>
        </NavigationMenu>
        <NavigationButton>
          <NavigationButtonLink to='/signin'>Sign In</NavigationButtonLink>
        </NavigationButton>
      </Navigation>
    </>
  );
};

export default Navbar;