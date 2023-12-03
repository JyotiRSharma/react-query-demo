import { useState } from "react";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const [refetchIntervalValue, setRefetchIntervalValue] = useState(3000);

  const onSuccess = (data) => {
    console.log("data ", data);
    if (data.length > 3) {
      setRefetchIntervalValue(false);
    }
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData({
    refetchIntervalValue,
    onSuccess,
  });
  if (isLoading || isFetching) {
    return <div style={{ padding: "10%" }}>Loading...</div>;
  }
  if (isError) {
    return <div style={{ padding: "10%" }}>{error.message}</div>;
  }
  return (
    <div style={{ padding: "10%" }}>
      <h2>RQSuperHeroes</h2>
      {/* {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))} */}
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroes;
