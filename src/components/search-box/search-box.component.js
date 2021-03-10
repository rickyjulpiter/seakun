import React from "react";

export const SearchBox = (handleChange) => (
    <input
        type="search"
        className="search"
        placeholder="Please type Email or Order ID"
        onChange={handleChange}
    />
);

export default SearchBox;
