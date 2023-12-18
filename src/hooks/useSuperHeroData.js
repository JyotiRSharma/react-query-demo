import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { API_URL } from "../constants";

const fetchHero = (heroId) => {
  return axios.get(`${API_URL}/superheroes/${heroId}`);
};
const addSuperHero = (hero) => {
  return axios.post(`${API_URL}/superheroes/`, hero);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["hero-query", heroId], () => fetchHero(heroId));
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
