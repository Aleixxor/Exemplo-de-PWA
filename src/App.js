import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemonList } from "./pokemon";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPokemonList();
      data = data.results.map((_) => {
        return {
          ..._,
          image: `https://img.pokemondb.net/sprites/sword-shield/icon/${_.name}.png`,
        };
      });
      setListData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          marginTop: "40px",
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto",
        }}
      >
        {listData?.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                width: "120px",
                height: "90px",
                border: "2px solid #000000",
                margin: "30px 10px",
              }}
            >
              <div style={{ padding: "5px 10px" }}>
                <p
                  style={{
                    margin: "0",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </p>
              </div>
              <img className="pokemons" alt={item.name} src={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
