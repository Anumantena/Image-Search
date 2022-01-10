import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchPhotos(props) {
    
    //destructuring
    const { checkedImages, setcheckedImages, setAddImages } = props;

    const [search, setSearch] = useState("");
    const [inputResults, setInputResults] = useState([]);
    const [resultsFromServer, setResultsFromServer] = useState([]);
  
    const handleSearchPhotos = async () => {
        axios.get("https://api.thedogapi.com/v1/images/search?limit=100")
            .then((json) => {
                setResultsFromServer(json.data)
                console.log(json.data);
            })
            .catch(err => {
                console.log(err);
            })
    };
    // onchange search
    // useEffect, willmount(call only once in life), didUpdate(call when, array items have changed, render(call always, on each render)
    useEffect(() => {
        handleSearchPhotos()
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let localres = resultsFromServer.filter((img) => {
            return img?.breeds[0]?.name?.toLowerCase().includes(search.toLowerCase())
        }) //- [1,2,3]
        setInputResults(localres)

    }
    console.log({ inputResults })


    /// clicking on Add image button
    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
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
                {inputResults.map((pic) =>
                    <li key={pic.id}>
                        <p>{pic.breeds[0].name}</p>
                        <img src={pic.url} alt="" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => {
                            setcheckedImages(checkedImages => [...checkedImages, pic])

                            // hide table
                            if(checkedImages.length !== 0){
                                setAddImages(false)
                            }
                        }}></input>
                    </li>)}
            </ul>
            {/* onChange={(e) => setIsChecked(e.target.checked)} */}
            <button type="submit" className="button" onClick={(e) => setAddImages(true)}> Add Images </button>
        </>
    );
}
export default SearchPhotos;


//Js APIS used - includes, filter, map, toLowerCase
