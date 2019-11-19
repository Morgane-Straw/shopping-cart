import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import navLogo from './logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from '../styles/Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper 
      className='navbar navbar-expand-sm navbar-dark  px-sm-5'>
        {/** https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons */}
        <Link to='/'>
          <img src={navLogo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'><b>Products</b></Link>
          </li>
        </ul>
        <Link to='../pages/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus' /> My Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav `
background: var(--lightBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem; //1rem == 20px
  text-transform: capitalize;
};
`