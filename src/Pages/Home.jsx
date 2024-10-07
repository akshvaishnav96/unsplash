import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { fetchImages } from "../utils/fetchHalper";
import Gallery from "../components/Gallery";

export default function Home() {
  const [search, setSearch] = useState("");
  const [countVal, setCountVal] = useState("");
  const [orientation, setOrientation] = useState("");
  const [random, setRandom] = useState(false);
  const [query, setQuery] = useState("photos");
  const [images,setimages] = useState([])

  async function formSubmitHandler(e) {
    e.preventDefault();


    if (search && search.length > 0) {
      setQuery(`search/photos/?query=${search}`);

      if (countVal && countVal.length > 0) {
        setQuery(`search/photos/?query=${search}&per_page=${countVal}`);
      }
    }else if(countVal && countVal.length > 0 ){
        setQuery( random ? `photos/random/?count=${countVal}`:`photos/?per_page=${countVal}`);
    }else{
        setQuery( random ?  `photos/random/` :`photos/`);
    }

    //    const images=  await fetchImages("photos")
    //    const images=  await fetchImages("photos/?per_page=30") // number of items
    //    const images=  await fetchImages("photos/random/?count=30") // random images
    //    const images=  await fetchImages("photos/random/?count=30&query=cars&orientation=landscape") // random images
    // const images = await fetchImages("search/photos/?query=cars&per_page=10&orientation=landscape")
  }

 async function checkBoxHandler(elem){

    setRandom((prev)=>!prev)
    setSearch("");

    if(elem.target.checked){
    let filters = countVal ? `?count=${countVal}`:"?count=10"
        setQuery("photos/random/" + filters )
    }else{
    let filters = countVal ? `?per_page=${countVal}`:"?count=10"

        setQuery("photos/" + filters )

    }
  }
  useEffect(()=>{
    async function getImages(){
        
      const data =   await fetchImages(query)  ;
      setimages(data)
        
    }

    getImages()
  },[query])
  return (
    <div>
      <Form formSubmitHandler={formSubmitHandler} setSearch={setSearch} search={search} setCountVal={setCountVal} countVal={countVal}  random={random} checkBoxHandler={checkBoxHandler} />
      <Gallery images={images}/>
    </div>
  );
}
