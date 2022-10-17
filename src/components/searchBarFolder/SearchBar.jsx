import React, {useState } from "react";
import "./searchBar.scss";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [locationx, setLocationx] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if(sortByOption === sortBy){
      return 'active';
    }
    return '';
  }

  const handleSearch = (e) =>{
    props.searchYelp(term, locationx, sortBy);
    e.preventDefault();
  }

  const handleLocationxChange = (e) => {
    setLocationx(e.target.value);
  }

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  }

  const handleSortByChange = {
    'Highest Rated'(){
      setSortBy('rating');
    },
    'Best Match'(){
      setSortBy('best_match');
    },
    'Most Reviewed'(){
      setSortBy('review_count');
    }
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption, index) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={handleSortByChange[sortByOption]} className={getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange}/>
        <input placeholder="Where?" onChange={handleLocationxChange}/>
      </div>
      <div className="SearchBar-submit">
        <a href="#" onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};
