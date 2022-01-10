import React, { useState } from "react";
import AddedImages from "./AddedImages";
import './App.css';
import SearchPhotos from "./SearchPhotos-v2";
// import addImages from "./addImages";
// import { BrowserRouter } from "react-router-dom";

function App() {

  const [checkedImages, setcheckedImages] = useState([]);
  const [addImages, setAddImages] = useState(false);
  
  //Empty Component
  const [selectedRoute, setSelectedRoute] = useState("");

  

  const handlePageChange = (evt) => {
    evt.preventDefault()

    console.log(evt.target.textContent.toLowerCase())

    setSelectedRoute(evt.target.textContent.toLowerCase());
  }

  console.log({selectedRoute})
  
  const routes = {
    'search': <SearchPhotos
      checkedImages={checkedImages}
      setcheckedImages={setcheckedImages}
      setAddImages={setAddImages}
    />,
    'results': addImages && <AddedImages checkedImages={checkedImages} />
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Image Search</h1>
        
        <a href="" className="searchbar" onClick={handlePageChange}>
          Search
        </a>

        <a href="" className="searchResults" onClick={handlePageChange}
          style={{
            marginLeft: "10px"
          }}
        >
          Results
        </a>

        {routes[selectedRoute]}


      </div>
    </div>
  );
}




export default App;
;