import React, { useState, useEffect } from "react";
import axios from "axios";
/**
 * description: 
 * Search UI -> 
 *  1. Should get a bunch of data (100 records) from server, use axios or fetch. On initialize of the component fetch the records. 
 *  2. Only on Submit show records matching the input.
 * 
 * eg :- t -> all records starting with t, te -> all records starting with te 
 */



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