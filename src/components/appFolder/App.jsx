import { Business } from "../businessFolder/Business";
import React from "react";
import "./app.scss";
import { SearchBar } from "../searchBarFolder/SearchBar";
import { BusinessList } from "../businessListFolder/BusinessList";

function App() {
  return <div className="App">
    <h1>ravenous</h1>
    <SearchBar/>
    <BusinessList/>
  </div>;
}

export default App;
