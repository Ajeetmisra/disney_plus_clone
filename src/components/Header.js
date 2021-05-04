import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/orignal-icon.svg" alt="" />
          <span>Orignals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImage src="/images/ajeet.png" />
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;
        transform: scaleX(0);
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
