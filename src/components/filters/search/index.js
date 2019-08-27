import React from "react";

export default function Search({ searchText, handleChange }) {
  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        placeholder="Search city"
        onChange={handleChange}
      />
    </div>
  );
}
