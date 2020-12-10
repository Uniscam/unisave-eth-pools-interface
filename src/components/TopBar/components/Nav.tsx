import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Menu
      </StyledLink>
      <StyledExternalLink target="_blank" href="https://app.unisave.exchange/#/swap?inputCurrency=0x12e2fcfa079fc23ae82ab82707b402410321103f&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56">
        Swap
      </StyledExternalLink>
      {/* <StyledLink exact activeClassName="active" to="/shop">
        Shop
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/nfts">
        NFTs
      </StyledLink> */}
      {/* <StyledLink exact activeClassName="active" to="/vestnft">
        VestNFT
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/mynft">
        MyNFT
      </StyledLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledExternalLink = styled.a`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
