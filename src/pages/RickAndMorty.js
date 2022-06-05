import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Button } from "react-scroll/modules";



const StyledButton = styled.button`
  background-color: blue;
  font-size: 32px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export default function RickAndMorty() {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      setData(result.data);
    }
    fetchData();
  }, [search]);

  return (
    <div className="resultsWrapper">
      <br />
      <form style={{display: 'flex',  justifyContent:'space-around', alignItems:'center'}} onSubmit={handleSubmit} >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <StyledButton type="submit" color="blue">Search</StyledButton>
      </form>
      <div className="results">
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <img alt={item.name} src={item.image} />
              <span className="name">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
