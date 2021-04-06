import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { api } from '../utils/api.js'
import Tabulation from "./Tabulation";




function App() {
  const [boards, setBoards] = useState([]);
  const [woods, setWoods] = useState([]);
  const [finishes, setFinishes] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [products, setProducts] = useState([]);

 const handleTabClick = (tab) => {
   console.log(tab)
    api.getAllItems(tab)
    .then((result) => {
      result = Array.from(result);
      switch (tab) {
        case "boards": 
        setBoards(result);
        break;
        case "wood": 
        setWoods(result);
        break;
        case "finishes": 
          setFinishes(result);
        break; 
        case "materials": 
          setMaterials(result)
        break;
        case "products": 
          setProducts(result);
        break;    
        default: 
        console.log("something went wrong")
        }
      })
    .catch((err) => {
      console.log(err);
    });
} 

const handleDelete = (element, id) => {
  console.log(element)
   api.deleteItem(element, id)
   .then(() => {
     switch (element) {
       case "boards": 
       setBoards(boards.filter(board => board.id !== id));
       break;
       case "wood": 
       setWoods(woods.filter(wood => wood.id !== id));
       break;
       case "finishes": 
         setFinishes(finishes.filter(finish => finish.id !== id));
       break; 
       case "materials": 
         setMaterials(materials.filter(material => material.id !== id))
       break;
       case "products": 
         setProducts(products.filter(product => product.id !== id));
       break;    
       default: 
       console.log("something went wrong")
       }
     })
   .catch((err) => {
     console.log(err);
   });
} 
/*
const handleAdd = (element, item) => {
  api.addNewItem(element, item)
  .then((result)=>{
    switch (element) {
      case "boards": 
      setBoards(boards.filter(board => board.id !== id))
      break;
      case "wood": 
      setWoods(woods.filter(wood => wood.id !== id));
      break;
      case "finishes": 
        setFinishes(finishes.filter(finish => finish.id !== id));
      break; 
      case "materials": 
        setMaterials(materials.filter(material => material.id !== id))
      break;
      case "products": 
        setProducts(products.filter(product => product.id !== id));
      break;    
      default: 
      console.log("something went wrong")
      }
  })
}
*/
/*
React.useEffect (()=> {
  api.getAllItems("wood")
  .then((result) => {
    result = Array.from(result);
    setWoods(result)
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
  });
}, []);


  

const handleDelete = board => {
//  setLoading(true);
  fetch(`http://localhost:8080/api/boards/` + board.id, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
  })
          .then((res) => {
              if (res.status===200) {
              //    setLoading(false)
              //    setRender (!render)
              }
          })

  };

  const handleSave= (e, id, setState) => {
    setEdit(false);
    setValue(e.target.value);
    setLoading(true);
    fetch(`http://localhost:8080/api/boards/`+id, {
    method: "PUT",
    body: JSON.stringify({
        size: e.target.value
    }),
    headers: {
    "Content-Type": "application/json"
},

}
)
.then(async(res) => {
    if (res.status===200) {
        setRender(!render)
    }else{
        e.target.value = prevValue
        const err = await res.json();
        setState(err);
    }
})
};

function handleAlertClose(){

  console.log(error)
  setError(null)
  console.log(error)
 setRender(!render)
  }
*/

  return (
    <div>
        <h1>Project calculator</h1>
        <Tabulation onClick={handleTabClick} boards = {boards} woods = {woods} finishes={finishes} materials={materials} products={products} onDelete={handleDelete}/>
    </div>

  );
}

export default App;
