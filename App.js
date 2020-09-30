import React, { useState } from 'react';

const App = () => {

  const[val , setval] = useState([])
  const getdata = () => {
    const url = "http://localhost:8000/api/article-list/"
    
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setval(data))

      // console.log(val)
  }
  
  getdata()
  return(
    <div>
      
      <h1>This  is a simple project trying to use rest api created in django</h1>
      <div>
        <ul>
        {val.map((item) => {
         return( <li>{item.title} -  {item.desc}</li>)
        })}
        </ul>
      </div>
    </div>
    
  )
}


export default App;
