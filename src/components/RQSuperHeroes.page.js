import { useQuery } from "react-query";
import axios from "axios";
import { API_URL } from "../constants";
import { useState } from "react";

const superHeroesFetcher = () => {
  return axios.get(`${API_URL}/superheroes`);
};

const RQSuperHeroes = () => {
  const [refetchIntervalValue, setRefetchIntervalValue] = useState(3000);

  const onSuccess = (data) => {
    console.log("data ", data.data.length)
    if (data.data.length > 3) {
      setRefetchIntervalValue(false);
    }
  }

  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", superHeroesFetcher, {
    cacheTime: 3000,
    staleTime: 3000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: refetchIntervalValue,
    refetchIntervalInBackground: true,
    onSuccess: onSuccess
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
