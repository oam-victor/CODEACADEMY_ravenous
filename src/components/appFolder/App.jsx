import React, {useState} from "react";
import "./app.scss";
import { SearchBar } from "../searchBarFolder/SearchBar";
import { BusinessList } from "../businessListFolder/BusinessList";
import { Yelp } from "../../util/Yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) =>{
    Yelp.search(term, location, sortBy).then((businesses) => {
      setBusinesses(businesses);
    });
  }

  return <div className="App">
    <h1>Ravenous</h1>
    <SearchBar searchYelp={searchYelp}/>
    <BusinessList businesses={businesses}/>
  </div>;
}

export default App;
