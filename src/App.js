import { useState, useEffect  } from 'react'
import Cols from './Cols';
import "./App.css"

function App() {

 const[data,setData]=useState([]);
 const [choosen, setChosen] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);



  useEffect(() => {
    getData();
  }, []);
  

  function getData() 
  {
    
    fetch("../mockData.json")
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data.data.length)
      setData(data.data)
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

      
      <div>
         
        




        <img className="logo" src="../logo.png" alt="tesodev logo"></img>
        <form>
        <input className="input" 
         value={search}
         onChange={(e) => searchChangeHandler(e)}
        type="text"></input>
        </form>
        <button  type="submit" className="button"><div className="searchF">Search</div></button>
        
        <div className="list">

          
        {search === "" || !dropdownOpen ? "" : (
         <div>
            {data.filter((item) =>
                  item[0].toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item[5].toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (


                <div key={index}

                
                  onClick={() => dropdownClickHandler(item)}>

<table>
                        <tbody>
                        <tr>
                        <td>

                        <div style={{fontSize:"18px",fontWeight:"bold",fontFamily:"Roboto",color:"#484848"}}>
                {item[4]} - {item[5]}
                </div>
                <div style={{fontSize:"12px",fontWeight:"normal",fontFamily:"Roboto",color:"#686868"}}>
                {item[0]} - {item[3]} 

                </div>


                        </td>
                        <td>
                            <div style={{fontSize:"18px",fontWeight:"bold",fontFamily:"Roboto",color:"#484848",marginLeft:"50px"}}>
                            {item[2]}
                            </div>
                             </td>
                        </tr>
                        </tbody>
                        </table>
                        <hr></hr>
                
                </div>


              )).slice(0, 5)}
          </div>
        )}
          









        
                    </div>
        
                

                 
        </div>
     
    )
  }

export default App;
