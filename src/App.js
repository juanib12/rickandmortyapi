import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import NavBar from "./NavBar";
import NavBarHome from "./NavBarHome";

const CenterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50px;
  bottom: 50px;
`;

const Article1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 150px;
  transform: box-shadow 0.2s ease;
  margin: 80px 10px 0 10px;
  margin-right: 20px;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  border-radius: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;

const Article2 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 150px;
  transform: box-shadow 0.2s ease;
  margin: 80px 10px 0 10px;
  margin-right: 20px;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  border-radius: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;

const Article3 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 150px;
  transform: box-shadow 0.2s ease;
  margin: 80px 10px 0 10px;
  margin-right: 20px;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;

const P = styled.p``;

function App() {
  return (
    <div>
      <NavBarHome />
      <Container>
        <CenterMain>
          <Article1>
            <Link to="/collections" className="cards-links">
              Episodes
            </Link>
            <P>See all episodes</P>
          </Article1>
          <Article2>
            <Link to="/locations" className="cards-links">
              Locations
            </Link>
            <P>See all locations</P>
          </Article2>
          <Article3>
            <Link to="/characters" className="cards-links">
              Characters
            </Link>
            <P>See all characters</P>
          </Article3>
        </CenterMain>
      </Container>
    </div>
  );
}

export default App;
