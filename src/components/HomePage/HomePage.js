import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import MainHeader from "./MainHeader/MainHeader";
import PreviewCard from "../PreviewCard/PreviewCard";
import { fetchCharacters, useQuery } from "../utils";
import "./styles.css";
export default function HomePage() {
  const [offset, setOffset] = useState(0);
  let query = useQuery();
  const history = useHistory();
  const [searchText, setSearchText] = useState('');
  const [characters, setCharacters] = useState([]);
  useEffect(async () => {
    setCharacters(await fetchCharacters(offset));
  }, [offset]);
  const pageCount = 100;
  const handlePageClick = (data) => {
    setOffset(data.selected * 10);
    console.log(data);
  };
  return (
    <div className="container-fluid p-0 m-0">
      <MainHeader />
      <h1 className="sectionTitle">Breaking Bad Characters</h1>
      <div className="row w-100 mt-2 bottomContainer">
        <SearchBar onSubmit={(nameParam) => {
              history.push({ search: nameParam, pathname:"/search" })
        }} text={searchText} onChange={setSearchText} className="col-md-6 col-12 pt-2" />
        {/* <SearchBar className="col-md-6 col-12 pt-2"/> */}
        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          className="col-md-6 col-12 d-flex justify-content-end"
        />
        <div className="container gallery">
          <div className="row justify-content-center">
            {characters.map((character) => {
              return (
                <PreviewCard
                  name={character.name}
                  occupation={character.occupation.toString()}
                  dob={character.birthday}
                  status={character.status}
                  link={"/character/" + character.char_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
