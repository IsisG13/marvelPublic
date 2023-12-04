import { useEffect, useState } from "react";
import "./App.css";
import Filmes from "./marvel.json";
import { useNavigate } from "react-router-dom";

function App() {
  const [marvel, setMarvel] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (Filmes.data && Array.isArray(Filmes.data.movies)) {
      setMarvel(Filmes.data.movies);
    }
    console.log(Filmes)
  }, []);

  const navigateToDetails = (id) => {
    navigate(`/detalhes/${id}`);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <h1>Marvel</h1>
        </a>
        {marvel &&
          marvel.map((marvels) => (
            <div className="card">
              <img src={marvels.imagem} alt={marvels.nome}  onClick={() => navigateToDetails(marvels.id)}/>
              <div className="conteudo">
                <div key={marvels.id}>
                  <p>{marvels.nome}</p>
                  <p>{marvels.sobre}</p>
                  <h5>Filme: </h5>
                  <a href={marvels.urlFilme} target="_blank">{marvels.filme}</a>
                  <p>{marvels.lancamentoF}</p>
                  <h5>Serie: </h5>
                  <a href={marvels.urlSerie} target="_blank">{marvels.serie}</a>
                  <p>
                    {marvels.temporada} - {marvels.lancamentoS}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
