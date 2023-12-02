import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${API_URL}/superheroes`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div style={{padding: "10%"}}>Loading...</div>;
  }
  return (
    <div style={{padding: "10%"}}>
      <h2>SuperHeroes</h2>
      {data && data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
};

export default SuperHeroes;
