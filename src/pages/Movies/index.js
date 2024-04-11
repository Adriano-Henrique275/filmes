import React, { useState, useEffect } from "react";
import { getMoviesSave, deleteMovie } from "../../utils/storage";

import { Container, ListMovies } from "./styles";
import Header from "../../components/Header";
import FavoriteItem from "../../components/FavoriteItem";
import { useNavigation, useIsFocused } from "@react-navigation/native";

function Movies() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovie() {
      const result = await getMoviesSave("@primereact");

      if (isActive) {
        setMovie(result);
        console.log(result);
      }
    }

    if (isActive) {
      getFavoriteMovie();
    }

    return () => {
      isActive = false;
    }
  }, [isFocused]);

  async function handleDeleteMovies(id) {
    const result = await deleteMovie(id);
    setMovie(result);
  }

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus Filmes"/>
      <ListMovies 
        showsVerticalScrollIndicator={false}
        data={movie}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => (
          <FavoriteItem 
            data={item} 
            deleteMovie={handleDeleteMovies}
            navigatePage={() => navigateDetailsPage(item) } 
          />
        )}
      />
    </Container>
  )
}

export default Movies;