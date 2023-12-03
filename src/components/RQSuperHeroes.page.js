import { useQuery } from "react-query";
import axios from "axios";
import { API_URL } from "../constants";

const superHeroesFetcher = () => {
  return axios.get(`${API_URL}/superheroes`);
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", superHeroesFetcher, {
    cacheTime: 3000,
    staleTime: 3000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 2000,
    refetchIntervalInBackground: true
  });
  if (isLoading || isFetching) {
    return <div style={{ padding: "10%" }}>Loading...</div>;
  }
  if (isError) {
    return <div style={{ padding: "10%" }}>{error.message}</div>;
  }
  return (
    <div  style={{padding: "10%"}}>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => <div key={hero.id}>{hero.name}</div>)}
    </div>
  );
};

export default RQSuperHeroes;
