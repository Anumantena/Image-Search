import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchPhotos() {
    const [search, setSearch] = useState("");
    console.log(search);

    const [results, setResults] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();
        axios.get("https://api.thedogapi.com/v1/images/search?limit=100")
            .then((json) => {
                setResults(json.data)
                console.log(json.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <input
                    type="text"
                    name="search"
                    className="input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
                </button>
            </form>
            <ul>
                {results.map((pic) =>
                    <li>
                        <p>{pic?.breeds[0]?.name}</p>
                        <img src={pic.url} alt="" width={100} height={100} />
                    </li>)}

            </ul>
        </>

    );
}

export default SearchPhotos;