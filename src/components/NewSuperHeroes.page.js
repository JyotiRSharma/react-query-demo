import { useState } from "react";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

const NewSuperHeroes = () => {
  const [refetchIntervalValue, setRefetchIntervalValue] = useState(false);
  const onSuccess = (data) => {
    console.log("data is", data);
  };
  const { data, isLoading, isFetching, refetch } = useSuperHeroesData({
    refetchIntervalValue,
    onSuccess,
  });

  if (isLoading || isFetching) {
    return <h1>😇</h1>;
  }
  return (
    <>
      <button onClick={refetch}>Fetch data</button>
      {data.map((hero) => (
        <div>{hero}</div>
      ))}
    </>
  );
};

export default NewSuperHeroes
