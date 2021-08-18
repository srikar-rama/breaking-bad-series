import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";
import { fetchCharacterById } from "../utils";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback/ErrorFallback";
import "./styles.css";
function CharcaterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  useEffect(() => {
    fetchCharacterById(id)
      .then((data) => {
        setCharacter(data);
        console.log(data);
        setLoading(false);
      })
      .catch((er) => {
        setError('Something went wrong check the link');
      });
  }, []);
  if(error.length > 0){
    return <h1 className="text-center" style={{position:"absolute", inset:"50% 0 50% 0",color:"red"}}>{error}</h1>;
  }
  if (loading) {
    return <h1 className="text-center" style={{position:"absolute", inset:"50% 0 50% 0"}}>Loading...</h1>;
  }
  return (
    <div className="maincard mt-2 mb-2">
      <div className="col-12 col-md-5 characterCard">
        <div className="imagecard">
          {/* "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" */}
          <img className="innerimage" src={character.img} />
          <u className="characterName">{character.name}</u>
        </div>
        <table class="table table-borderless mt-2 characterTable">
          <tbody>
            <tr>
              <th scope="row" className="TablecolumnWidth">
                D.O.B
              </th>
              <td>
                <span>: &ensp;</span>
                {character.birthday}
              </td>
            </tr>
            <tr>
              <th scope="row">Occupation</th>
              <td>
                <span>:&ensp;</span>
                {character.occupation}
              </td>
            </tr>
            <tr>
              <th scope="row">Status</th>
              <td>
                <span>:&ensp;</span>
                {character.status}
              </td>
            </tr>
            <tr>
              <th scope="row">Nickname</th>
              <td>
                <span>:&ensp;</span>
                {character.nickname}
              </td>
            </tr>
            <tr>
              <th scope="row">Actor</th>
              <td>
                <span>:&ensp;</span>
                {character.portrayed}
              </td>
            </tr>
            <tr>
              <th scope="row" className="tableContent">
                Seasons appeared
              </th>
              <td>
                <span>:&ensp;</span>
                {character.appearance.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <p style={{ textAlign: "center" }}>
              <u>Quotes</u>
            </p>
            {character.quotes.map((quote, ind) => {
              return (
                <div class={"carousel-item " + (ind === 0 ? "active" : "")}>
                  <div class="carousel-caption">
                    <q>{quote.quote}</q>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharcaterPage;
