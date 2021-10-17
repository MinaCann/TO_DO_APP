import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
/* input, add, list */
function App() {
  // creating input text with empty string
const [inputText,setInputText] = useState("");
function handleChange(event){
//event.target.value is the LATEST INPUT VALUE
const newValue = event.target.value
// console.log(newValue)
setInputText(newValue)
}
/*items ARRAY will store all of the To Do items: shopping, walking,..
By default there is nothing in the to do list items 
initial value = []
we will use setItems to update the items array
We will show each single item insite items array in <li> element*/
const [items,setItems] = useState([]);
 //1. addItem function is to add the lastest item in the input to teh items array 
 //when user click on Add button
 //setItems function will be called to add the lastest item in items array
 //inputText(latest value) will be added items(array that has all items)
 
 //2. Also, it will keep all of teh previos items
 //setItems function hold onto the previous values
function addItem(){
  setItems(prevValue => {
    console.log(prevValue)
    return [...prevValue,inputText ]  
    }
  )
  // Clearing the textbox after adding the inputText to the items array
  setInputText("")
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleChange}
        type="text" 
        value={inputText}/>
        <button 
        onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {
           items.map((todoItem)=> {
           return <ToDoItem text={todoItem}/>
         }
         )}
        </ul>
      </div>
    </div>
  );
}
export default App;