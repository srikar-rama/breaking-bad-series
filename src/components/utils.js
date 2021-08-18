import { useLocation } from 'react-router-dom'

const URL = "https://breakingbadapi.com/api/characters";
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}
export const fetchCharacters = async (offset) => {
  const data = await (await fetch(URL + "?limit=10&offset=" + offset)).json();
  return data;
};
export const findCharacters = async (searchText, setSearch) => {
  const data = await (await fetch(URL + "?name=" + searchText)).json();
  setSearch(searchText);
  return data;
};
export const fetchCharacterById = async (id) => {
  const data = await (await fetch(URL + "/" + id)).json();
  console.log(data);
  const quotes = await (
    await fetch(
      "https://breakingbadapi.com/api/quote?author=" +
      data[0].name.trim().replace(/\s/g, "+")
    )
  ).json();
  return { ...data[0], quotes };
};
