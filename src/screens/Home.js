import React ,{useState,useEffect} from "react";
import Card from "../components/Card";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home() {

  const [search,setsearch] = useState('');
  const[foodCat,setFoodCat]=useState([]);
  const[foodItem,setFoodItem]=useState([]);


  const loadData= async () => {
    let response=await fetch("http://localhost:5000/create/fooddata",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      }
    });
    response= await response.json();
    setFoodItem(response.zwigato);
    setFoodCat(response.categories);

    // console.log(response[0]);
  }


  useEffect(()=>{
    loadData();
  },[])





  return (
    <>
      <div><Navbar /></div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {setsearch(e.target.value)}}
              />
              <button
                className="btn btn-outline-success text-white"
                type="submit"
                
              >
                Search
              </button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1414285963/photo/stuffed-turkey-for-thanksgiving-holidays-with-pumpkin-peas-pecan-berry-pie-cheese-variations.jpg?b=1&s=170667a&w=0&k=20&c=U5kafDu4mXmo05wRO7MY_--6WqO-VxFvyNk8x6sg2Kc="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1388791611/photo/teppanyaki-style.jpg?b=1&s=170667a&w=0&k=20&c=o4FL_2iyEO2XQiliXts-JphIFAhXg5BYlxvjxmBbh7E="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>







      <div className="container">
        {
          foodCat!==[]
          ? foodCat.map((data)=>{
            return(
              <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr/>
              {
                foodItem!==[]? foodItem.filter((item)=>(item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems=>{
                  return(
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">

                      <Card foodItem={filterItems}
                      // foodName={filterItems.name}
                      options={filterItems.options[0]}
                      // img={filterItems.img}
                      // desc={filterItems.description}
                      ></Card>
                    </div>
                  )
                }):<div>No such item</div>}
              </div>
            )
          })
          :""
        }
      
      </div>
      <div >
        <Footer />
      </div>
    </>
  );
}
