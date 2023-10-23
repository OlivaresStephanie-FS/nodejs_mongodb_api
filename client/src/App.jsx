import { useState } from "react";
import SearchBar from './components/SearchBar';
import "./App.css";

function App() {
  const handleSearch = ( event ) => {
    event.preventDefault();
    console.log(event.target.search.value);
    console.log(event.target.name.value);
  }
	return (
		<>
			<h1>Soli.nyc</h1>
      <SearchBar onSubmit={handleSearch}/>
		</>
	);
}

export default App;
