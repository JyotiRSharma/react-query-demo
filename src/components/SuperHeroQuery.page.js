import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const SuperHeroQueryPage = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useSuperHeroData(heroId);
  if (isLoading) {
    return <h1>😇</h1>;
  }
  return <div>{data.data.name}</div>;
};

export default SuperHeroQueryPage;
