import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TbChevronUp } from "react-icons/tb";
import "./style.css";
import background from "../images/background.jpg";

export function Persons() {
  const [newP, setNewP] = useState([]);
  const [search, setSearch] = useState("");
  
  console.log(newP)

  const requestData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setNewP(data.results);
  };

  useEffect(() => {
    requestData();
    console.log("Component renderizing");
  }, [search]);

  function returnToTop() {
    const top = document.querySelector(".toTop");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }


  return (
    <div className="container">
      <p onClick={() => returnToTop()} className="toTop">
        {" "}
        <TbChevronUp />{" "}
      </p>
      <div className="searchAndTitle">
        <h1> Personagens </h1>
        <input
          className="search"
          type="search"
          placeholder="Buscar personagem"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="containerPerson">
        {newP &&
          newP.filter((p , index ) => p.name.toLowerCase().includes(search.toLowerCase())).map((p, index) =>
          (
              <div
                className="Persons"
                key={index}
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="cardPersons">
                  <img
                    className="imagePerson"
                    src={p.image}
                    alt="não contém imagem"
                  />
                  <div className="text">
                    <h2 className="namePerson"> Nome: {p.name}</h2>
                    <hr />
                    <p className="housePerson"> Status: {p.status}</p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
