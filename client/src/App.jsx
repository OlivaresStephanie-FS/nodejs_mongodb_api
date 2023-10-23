import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import API from "./API.js";
import ArtistList from "./components/ArtistList";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await API.fetchArtists();
      const artistData = response.data.data; // Use response.data.data to access the array of artists
      setArtists(artistData);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  return (
    <>
      <h1>Soli.nyc</h1>
      <SearchBar onSubmit={handleSearch} />
      <ArtistList artists={artists} />
    </>
  );
}

export default App;
