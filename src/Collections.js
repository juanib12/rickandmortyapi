import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Container } from "@mui/material";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import NavBarEp from "./NavBarEp";

const Div = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 750px;
  height: 200px;
  transform: box-shadow 0.2s ease;
  margin: 40px 10px 0 10px;
  padding: 30px 35px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;


const P = styled.p`
  display: flex;
  position: relative;
  margin-left: 20px;
`;

const H1 = styled.h1`
  position: relative;
  font-size: 18px;
`;

const Titulo = styled.h1`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 22px;
`;

const Collections = () => {
  const [pokemones, setPokemones] = useState([]);
  const open = (url) => window.open(url);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await response.json();
      setPokemones(data.results);
    };
    getPokemones();
  }, []);

  console.log(pokemones);
  return (
    <div>
      <NavBarEp />
      <Div>
        <Titulo>Rick and Morty Episodes</Titulo>
        <Link to="/" className="link">
          Volver a Atras
        </Link>
        <Container>
          <Center>
            {pokemones.map((pokemon) => (
              <Article
                key={pokemon.id}
                className="card"
                onClick={() => open(pokemon.url)}
              >
                <H1>{pokemon.name}</H1>
                {/* <Img src={pokemon.image} width={200} height={200} /> */}
                <P>{pokemon.air_date}</P>
                <P>{pokemon.episode}</P>
              </Article>
            ))}
          </Center>
        </Container>
      </Div>
    </div>
  );
};

export default Collections;
