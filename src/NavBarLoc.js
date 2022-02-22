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

const Homebtn = styled.a`
  position: relative;
  display: flex;
  right: 0px;
  left: -5px;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 20px;
  padding: 13px 15px;
`;

const Logo = styled.div`
  display: flex;
  position: relative;
  right: 30px;
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
  margin-left: 10px;
  margin-right: 10px;
  font-size: 25px;
  color: rgb(118, 118, 118);
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 1300px;
`;

const CenterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50px;
  bottom: 50px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 300px;
  transform: box-shadow 0.2s ease;
  margin: 40px 10px 0 10px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: auto;
  border-radius: 20px;
`;

const P = styled.p`
  margin: 10px 15px;
`;

const H1 = styled.h1`
  position: relative;
  font-size: 18px;
`;

const NavBarLoc = () => {
  const [character, setCharacter] = useState([]);
  const open = (url) => window.open(url);
  console.log({ character });
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values) => {
          const response = await fetch(
            `https://rickandmortyapi.com/api/location/?name=${values.name}`
          );
          const data = await response.json();
          //llamar a api unplash
          setCharacter(data.results);
        }}
      >
        <Form>
          <Navbar>
            <Logo>
              <i class="bx bx-ghost"></i>
            </Logo>
            <Homebtn href="/">Home</Homebtn>
            <Items>
              <Link to="/collections" className="link-home">
                Episodes
              </Link>
            </Items>
            <Items>
              <Link to="/locations" className="link-locations">
                Locations
              </Link>
            </Items>
            <Items>
              <Link to="/characters" className="link-character">
                Characters
              </Link>
            </Items>
            <Field
              name="name"
              placeholder="Search for name's..."
              className="field"
            />
          </Navbar>
        </Form>
      </Formik>

      <Container>
        <Center>
          {character.map((charac) => (
            <Article
              key={charac.id}
              className="card"
              onClick={() => open(charac.url)}
            >
              <H1>{charac.name}</H1>
              {/* <Img src={pokemon.image} width={200} height={200} /> */}
              <P>{charac.type}</P>
              <P>{charac.dimension}</P>
            </Article>
          ))}
        </Center>
      </Container>
    </div>
  );
};

export default NavBarLoc;
