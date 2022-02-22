import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 22px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  height: 35px;
`;

const BtnHome = styled.a`
  position: relative;
  display: flex;
  right: 0px;
  left: -420px;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 20px;
  padding: 13px 15px;
`;

const Logo = styled.div`
  display: flex;
  position: relative;
  right: 450px;
  font-size: 30px;
  color: #e60023;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 240, 240);
    border-radius: 50%;
    box-shadow: 0px 1px 6px rgb(0, 0, 0, 0.1);
  }
`;

const Items = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  left: 450px;
  font-size: 25px;
  color: rgb(118, 118, 118);
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const NavBarHome = () => {
  return (
    <div>
      <Navbar>
        <Logo>
          <i class="bx bx-ghost"></i>
        </Logo>
        <BtnHome href="/">Home</BtnHome>
        <Items>
          <i class="bx bxs-collection itm1"></i>
          <Link to="/collections" className="link-home">
            Episodes
          </Link>
        </Items>
        <Items>
          <i class="bx bxs-map itm2"></i>
          <Link to="/locations" className="link-locations">
            Locations
          </Link>
        </Items>
        <Items>
          <i class="bx bxs-user-circle itm3"></i>
          <Link to="/characters" className="link-character">
            Characters
          </Link>
        </Items>
      </Navbar>
    </div>
  );
};

export default NavBarHome;
