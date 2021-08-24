import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";

function App() {
  const [data, setData] = useState([]);
  const [choosen, setChosen] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  useEffect(() => {
    
    getData();
    
  },[]);

  function getData() {
    fetch("../mockData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        console.log(data.data.length);
        setData(data.data);
      });
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
    <Router>
      <Route exact path="/">
      
        <div>
          <img className="logo" src="./128png.png" alt=""></img>
          <div className="logoText">Search web app</div>
          <form>
            <input
              className="input"
              value={search}
              onChange={(e) => searchChangeHandler(e)}
              type="text"
            ></input>
          </form>
          <button type="submit" className="button">
            <div className="searchF">Search</div>
          </button>

          <div className="list">
            {search === "" || !dropdownOpen ? (
              ""
            ) : (
              <div>
                {data
                  .filter(
                    (item) =>
                      item[0].toLowerCase().includes(search.toLowerCase()) ||
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
                                  position: "absolute",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  fontFamily: "Roboto",
                                  color: "#484848",
                                  marginLeft: "50px",
                                  right: "35px",
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
                  .slice(0, 3)}
                <a
                  href="/detail"
                  style={{
                    textAlign: "center",
                    display: "block",
                    marginTop: "18px",

                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    alignItems: "center",
                    color: "#000000",
                  }}
                >
                  Show more...
                </a>
              </div>
            )}
          </div>
        </div>
      </Route>

      <Route path="/detail" component={Detail} />
    </Router>
  );
}

export default App;
