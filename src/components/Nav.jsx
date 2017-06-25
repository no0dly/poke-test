import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

import styled from 'styled-components'

const Nav = (props) => {
  return (
    <Wrap>
      <Container>
        <Logo to="/">
          <FontAwesome
            name="ravelry"
            size="2x"
          />
        </Logo>
        <div>
          <NavLink to="/">
            Homepage
          </NavLink>
          <NavLink to="/graph">
            Graph
          </NavLink>
        </div>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: rgba(111, 185, 214, 0.65 );
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: center;
`

const Logo = styled(Link)`
  display: block;
  color: #000;
  transition: 0.3s;
  &:hover {
    color: #599979;
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  color: #000;
  text-decoration: none;
  transition: 0.3s;
  padding: 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

export default Nav
