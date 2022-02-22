import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Container, Pagination } from "@mui/material";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

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
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 400px;
  transform: box-shadow 0.2s ease;
  margin: 40px 10px 0 10px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 20px;
  cursor: default;
  &:hover {
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: auto;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 20px;
`;

const P = styled.p`
  margin: 3px 15px;
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

const Characters = () => {
  const [pokemones, setPokemones] = useState([]);
  const open = (url) => window.open(url);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      const data = await response.json();
      setPokemones(data.results);
    };
    getPokemones();
  }, []);

  console.log(pokemones);
  return (
    <div>
      <NavBar />
      <Div>
        <Titulo>Rick and Morty Characters</Titulo>
        <Link to="/" className="link">
          Volver a Atras
        </Link>
        <Container>
          <Center>
            {pokemones.map((pokemon) => (
              <Article key={pokemon.id} className="card">
                <H1>{pokemon.name}</H1>
                <Img src={pokemon.image} width={200} height={200} />
                <P>Specie: {pokemon.species}</P>
                <P>Status: {pokemon.status}</P>
                <P>Gender: {pokemon.gender}</P>
                <P>Origin: {pokemon.origin.name}</P>
              </Article>
            ))}
          </Center>
        </Container>
      </Div>
    </div>
  );
};

export default Characters;
