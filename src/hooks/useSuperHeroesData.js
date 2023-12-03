import { useQuery } from "react-query";
import axios from "axios";
import { API_URL } from "../constants";

const superHeroesFetcher = () => {
  return axios.get(`${API_URL}/superheroes`);
};

const useSuperHeroesData = ({refetchIntervalValue, onSuccess}) => {
  return useQuery("super-heroes", superHeroesFetcher, {
    cacheTime: 3000,
    staleTime: 3000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: refetchIntervalValue,
    refetchIntervalInBackground: true,
    onSuccess: onSuccess,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};

export default useSuperHeroesData;
