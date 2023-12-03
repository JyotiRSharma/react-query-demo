import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/superheroes`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div style={{ padding: "10%" }}>Loading...</div>;
  }
  if (error) {
    return <div style={{ padding: "10%" }}>{error}</div>;
  }
  return (
    <div style={{ padding: "10%" }}>
      <h2>SuperHeroes</h2>
      {data && data?.map((hero) => <div key={hero.id}>{hero.name}</div>)}
    </div>
  );
};

export default SuperHeroes;
