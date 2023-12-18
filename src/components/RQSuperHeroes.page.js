import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHeroData } from "../hooks/useSuperHeroData";
import useSuperHeroesData from "../hooks/useSuperHeroesData"

const RQSuperHeroes = () => {
  const [refetchIntervalValue, setRefetchIntervalValue] = useState(3000);
  const [superheroName, setSuperHeroName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("data ", data);
    // if (data.length > 3) {
    //   setRefetchIntervalValue(false);
    // }
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData({
    // refetchIntervalValue,
    onSuccess,
  });
  const {mutate: addSuperHero} = useAddSuperHeroData()

  if (isLoading || isFetching) {
    return <div style={{ padding: "10%" }}>Loading...</div>;
  }
  if (isError) {
    return <div style={{ padding: "10%" }}>{error.message}</div>;
  }
  const superHeroInputHandler = () => {
    console.log("SuperHero Name =", superheroName, "Alter Ego =", alterEgo);
    addSuperHero({"name": superheroName, "alterEgo": alterEgo});
  };
  return (
    <div style={{ padding: "10%" }}>
      <input
        type="text"
        placeholder="Super Hero Name"
        value={superheroName}
        onChange={(e) => setSuperHeroName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alter Ego"
        value={alterEgo}
        onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button onClick={superHeroInputHandler}>Add Super Hero</button>

      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Refetch SuperHeroes</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/super-hero-query/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </div>
  );
};

export default RQSuperHeroes;
