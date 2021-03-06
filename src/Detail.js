import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Pagination from "./Pagination";

const Detail = () => {
  const [data, setData] = useState([]);
  const [choosen, setChosen] = useState([]);
  const [count, setCount] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(6);

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

 

  const paginate=(pageNumber)=>setcurrentPage(pageNumber)
  const listbutton = () => {
    setfiltered(
      data
        .filter(
          (item) =>
            item[5].toLowerCase().includes(search.toLowerCase()) ||
            item[4].toLowerCase().includes(search.toLowerCase())
        )
        
    );
  };

  const listedasc = () => {
    setfiltered(
      data
        .filter(
          (item) =>
            item[5].toLowerCase().includes(search.toLowerCase()) ||
            item[4].toLowerCase().includes(search.toLowerCase())
        )
        
        .sort()
    );
  };
  const listeddesc = () => {
    setfiltered(
      data
        .filter(
          (item) =>
            item[5].toLowerCase().includes(search.toLowerCase()) ||
            item[4].toLowerCase().includes(search.toLowerCase())
        )
       
        .sort()
        .reverse()
    );
  };
  const ascyear = () => {
    setfiltered(
      data
        .filter(
          (item) =>
            item[5].toLowerCase().includes(search.toLowerCase()) ||
            item[4].toLowerCase().includes(search.toLowerCase())
        )
        
        .sort((a, b) => (a[3].substr(-4) > b[3].substr(-4) ? 1 : -1))
    );
    setCount(count + 1);
  };

  const descyear = () => {
    setfiltered(
      data
        .filter(
          (item) =>
            item[5].toLowerCase().includes(search.toLowerCase()) ||
            item[4].toLowerCase().includes(search.toLowerCase())
        )
        
        .sort((a, b) => (a[3].substr(-4) > b[3].substr(-4) ? 1 : -1))
        .reverse()
    );
    setCount(count + 1);
  };

  const searchChangeHandler = (e) => {
    setDropdownOpen(true);
    setSearch(e.target.value);
  };

  const dropdownClickHandler = (item) => {
    setDropdownOpen(false);
    setChosen([...choosen, item]);
  };
  const indexOfLastPost=currentPage * postPerPage;
  const indexOfFirstPost=indexOfLastPost-postPerPage;
  const currentPost=filtered.slice(indexOfFirstPost,indexOfLastPost)
  return (
    <Router>
      <Route exact path="/detail">
        <div>
          <a href="../">
            <img
              className="logodetail"
              src="./128png.png"
              alt="tesodev logo"
            ></img>
          </a>
          <form>
            <input
              className="inputdetail"
              value={search}
              onChange={(e) => searchChangeHandler(e)}
              type="text"
            ></input>
          </form>
          <button type="submit" onClick={listbutton} className="buttondetail">
            <div className="searchFdetail">Search</div>
          </button>

          <div className="listdetail">
            
            <div>
              {currentPost.map((item, index) => (
                <div key={index} onClick={() => dropdownClickHandler(item)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{
                              fontSize: "16px",
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
                              fontSize: "16px",
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
              ))}
      <Pagination postPerPage={postPerPage} currentPage={currentPage} totalPosts={filtered.length} paginate={paginate}  />

            </div>
          </div>

          <div class="dropdown orderby">
            <button class="dropbtn">Order By</button>
            <div class="dropdown-content">
              <a href={listedasc} onClick={listedasc}>
                Name ascending
              </a>
              <a href={listeddesc} onClick={listeddesc}>
                Name descending
              </a>
              <a href={ascyear} onClick={ascyear}>
                Year ascending
              </a>
              <a href={descyear} onClick={descyear}>
                Year descending
              </a>
            </div>
          </div>
          
        </div>
      </Route>
      <Route path="../" component={App} />
    </Router>
  );
};

export default Detail;
