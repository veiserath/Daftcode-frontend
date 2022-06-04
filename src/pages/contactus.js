import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactUs() {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
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
