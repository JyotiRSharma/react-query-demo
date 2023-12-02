import { useQuery } from "react-query";
import axios from "axios";
import { API_URL } from "../constants";

const superHeroesFetcher = () => {
  return axios.get(`${API_URL}/superheroes`);
};

const RQSuperHeroes = () => {
  const { isLoading, data } = useQuery("super-heroes", superHeroesFetcher);
  if (isLoading) {
    return <div style={{ padding: "10%" }}>Loading...</div>;
  }
  return (
    <div  style={{padding: "10%"}}>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => <div key={hero.id}>{hero.name}</div>)}
    </div>
  );
};

export default RQSuperHeroes;
