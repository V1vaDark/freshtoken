import React, { useEffect, useState } from "react";
import { signOut, getSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function SearchBox() {
  const [sessionData, setSessionData] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      setSessionData(session);
    });
  }, []);

  useEffect(() => {
    fetch('/coin.txt')
      .then(response => response.text())
      .then(data => {
        const suggestionsArray = data.split('\n').map(suggestion => suggestion.trim());
        const sortedSuggestions = suggestionsArray.sort(); 
        setSuggestions(sortedSuggestions);
      })
      .catch(error => console.error('Error fetching suggestions:', error));
  }, []);

  function logoutHandler() {
    signOut();
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit() {
    const selectedCoin = suggestions.find(suggestion => suggestion.includes(searchTerm));
    
    if (selectedCoin) {
      const coinId = selectedCoin.match(/\+(.*)\+/)[1];

      router.push(`/coins/${coinId}`);
    } else {
      console.error('No matching coin found');
    }
  }

  return (
    <div className="bg-darkone">
      <div className="middle">
        <div className="navbar flex">
          <div className="flex-1 flex-grow items-center">
            <input
              type="text"
              placeholder="Search Coins"
              className="input input-bordered w-full mx-5"
              style={{ backgroundColor: "#1e2635", color: "white" }}
              value={searchTerm}
              onChange={handleSearchChange}
              list="suggestions"
            />
            <datalist id="suggestions">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion.replace(/[+].*?[+]/g, '')} />
              ))}
            </datalist>
          </div>
          <button
            className="btn btn-primary search-button"
            onClick={handleSearchSubmit}
          >
            Search 🔍
          </button>
        </div>
      </div>
    </div>
  );
}