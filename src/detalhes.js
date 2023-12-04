import { useState, useEffect } from "react";
import Filmes from "./marvel.json";
import { useParams } from "react-router-dom";
import "./App.css";

function Detalhes() {
  const { id } = useParams();
  const [marvel, setMarvel] = useState([]);

  useEffect(() => {
    if (Filmes.data && Array.isArray(Filmes.data.movies)) {
      const movieDetails = Filmes.data.movies.filter(movie => movie.id.toString() === id);
      setMarvel(movieDetails);
    }
  }, [id]);

  if (!Array.isArray(marvel) || marvel.length === 0) {
    return <p>Nenhum detalhe encontrado</p>;
  }

  return (
    <div className="App-detalhes">
      <header className="detalhes">
        <a href="/">
          <h1>Marvel</h1>
        </a>
        {marvel.map((marvels) => (
          <div key={marvels.id}>
            <img
              className="imagemDetalhes"
              src={marvels.imagemDetalhes}
              alt={marvels.nome}
            />
            <div className="conteudoDetalhes">
              <h5>{marvels.nomeAtor}</h5>
              <a className="trailer" href={marvels.trailer} target="_blank">
                <h3>assistir o trailer</h3>
              </a>
              <h4>{marvels.sobreDetalhes}</h4>
              <p className="sobreTrailer">{marvels.sobreTrailer}</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Detalhes;
