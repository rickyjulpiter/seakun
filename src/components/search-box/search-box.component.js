import React from "react";

const SearchBox = ({ handleChange }) => (
    <input
        type="search"
        className="search"
        placeholder="Search by Email or Order ID"
        onChange={handleChange}
    />
);

export default SearchBox;
