import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Input, TextField } from "@mui/material";


const StyledButton = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #010606;
  }
  
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="resultsWrapper">
      <br />
      <form style={{display: 'flex',  justifyContent:'space-around', alignItems:'center'}} onSubmit={handleSubmit} >
        <TextField
          type="text"
          value={query}
          id='outlined-basic'
          placeholder='Character Name'
          onChange={(e) => setQuery(e.target.value)}
        ></TextField>
        <StyledButton type="submit" color="">Search</StyledButton>
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
