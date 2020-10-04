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
    <h2>This project displays all the entries in the database managed by django restframework</h2>
      <div>
        <h2>All the Items in the BlogList are: </h2>
        <ul>
        {val.map((item) => {
         return( <li>Item Title: {item.title} -  Item Desciprtion: {item.desc}</li>)
        })}
        </ul>
      </div>
    </div>
    
  )
}


export default App;
