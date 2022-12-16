import { useState, useEffect } from "react";
import { Item } from "./components/Card/Card";

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/?page=1')
			.then((res) => res.json())
			.then((data) => {
				setData(data.results);
			});
	}, []);

  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-center mb-5 pt-5">
        <h1 className="text-primary">Rick and Monty</h1>
      </div>
      <ul className="list-unstyled w-100 mx-auto d-flex justify-content-baseline flex-wrap">
        {
          data.map(item => {
            console.log(item);
            return <Item img={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            location={item.location.name}/>
          })
        }
      </ul>
    </div>
    </>
    )
  }

  export default App