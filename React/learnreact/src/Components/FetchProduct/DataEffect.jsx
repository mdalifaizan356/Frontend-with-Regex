import React, {useEffect, useState} from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';


const DataEffect = () => {
  // const [data, setData] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch();
  },[])


  const fetch = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(">>>>>>>>>>>Response>>>>>>>>", response.data);
    setData(response.data);
    setLoading(false);
  }
  // console.log(data);
  // const abc = ()=>{
  //   setLoading(!loading)

  // }

  const filterData=data.filter((elements)=>
  elements.title.toLowerCase().includes(search.toLocaleLowerCase())||elements.description.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <>
    <input type="text"
    value={search}
    placeholder='Search by titile'
    onChange={(e)=>setSearch(e.target.value)}

    />
    {
      loading ? (<Loader/>):(
      //loading ? (<h1 style={{color:"red"}}>loading</h1>):(
        <div>
      { (
        filterData.map((item) => (
          <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <LazyLoadImage 
              src={item.image} 
              style={{ width: "100px" }}
              effect='blur'
            />
            {/* <img src={item.image} alt={item.title} style={{ width: "100px" }} /> */}
          </div>
        ))
      )}
    </div>
      )
    }
    </>
  )
}

export default DataEffect


// function name and variable name is same????