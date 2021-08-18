import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PreviewCard from "../PreviewCard/PreviewCard";
import { findCharacters, useQuery } from "../utils";
import "./styles.css";
import { Link } from "react-router-dom";
const NoSuchResults = () => {
  return (
    <h1 className="text-center" style={{ color: "white" }}>No Such results found.</h1>
  )
}
export default function SearchPage() {
  const [offset, setOffset] = useState(0);
  let query = useQuery();
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(async () => {
    setCharacters(await findCharacters(query.get("name"), setSearchText));
    try {
      window.document.querySelector('input[aria-describedby="search-input"]').value = query.get('name').replace(/\+/g, ' ');
    } catch (error) {
    }
  }, [query.get("name")]);
  return (
    <div className="container-fluid p-0 m-0">
      <h1 className="sectionTitle">Search your ❝❤️❞ character</h1>
      <div className="row w-100 mt-2 bottomContainer">
        <Link to="/" style={{ width: "max-content", marginRight: "auto" }}>
          <button className="btn btn-secondary">Back</button>
        </Link>
        <SearchBar onSubmit={() => { }} text={searchText} onChange={setSearchText} className="col-md-6 col-12 pt-2" />
        <div className="container gallery">
          <div className="row justify-content-center">
            {characters.length < 1 ? <NoSuchResults /> :
              <>
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
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
