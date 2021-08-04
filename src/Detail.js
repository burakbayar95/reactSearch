import { useState, useEffect } from "react";
import Cols from "./Cols";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail=()=> {
  const [data, setData] = useState([]);
  const [choosen, setChosen] = useState([]);
  const [count, setCount] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("../mockData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.length);
        setData(data.data);
      });
  }


  const listedasc=()=>{
     setData(e=>e.sort())
    setCount(count+1)
    //data.sort()
  }
  const listeddesc=()=>{
    setData(e=>e.sort().reverse())
   setCount(count+1)
   //data.sort()
 }
 const ascyear=()=>{
     setData(e=>e[3].sort())
     setCount(count+1)
 }

  const searchChangeHandler = (e) => {
    setDropdownOpen(true);
    setSearch(e.target.value);
  };

  const dropdownClickHandler = (item) => {
    setDropdownOpen(false);
    setChosen([...choosen, item]);
  };

  return (
    <div>
      <img className="logodetail" src="../logo.png" alt="tesodev logo"></img>
      <form>
        <input
          className="inputdetail"
          value={search}
          onChange={(e) => searchChangeHandler(e)}
          type="text"
        ></input>
      </form>
      <button type="submit" className="buttondetail">
        <div className="searchFdetail">Search</div>
      </button>

      <div className="listdetail">
        {search === "" || !dropdownOpen ? (
          ""
        ) : (
          <div>
            {data
              .filter(
                (item) =>
                 // item[0].toLowerCase().includes(search.toLowerCase())   ||
                  item[5].toLowerCase().includes(search.toLowerCase()) ||
                  item[4].toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <div key={index} onClick={() => dropdownClickHandler(item)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              fontFamily: "Roboto",
                              color: "#484848",
                            }}
                          >
                            {item[4]} - {item[5]}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "normal",
                              fontFamily: "Roboto",
                              color: "#686868",
                            }}
                          >
                            {item[0]} - {item[3].substr(-4)}
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              fontFamily: "Roboto",
                              color: "#484848",
                              marginLeft: "50px",
                            }}
                          >
                            {item[2]}
                          </div>
                        </td>
                        
                      </tr>
                      
                    </tbody>
                    
                  </table>
                  <hr></hr>
                </div>
              ))
              .slice(0, 6)}
               
          </div>
          
        )}
      
      </div>
     
      <div class="dropdown orderby">
  <button class="dropbtn">Order By</button>
  <div class="dropdown-content">
    <a onClick={listedasc}>Name ascending</a>
    <a onClick={listeddesc}>Name descending</a>
    <a onClick={ascyear}>Year ascending</a>
    <a href="#">Year descending</a>
  </div>
</div>
    </div>
  );
  
}

export default Detail;
