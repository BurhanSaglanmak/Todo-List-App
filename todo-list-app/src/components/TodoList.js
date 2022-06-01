import React, { useState } from 'react'
import "./style.css"


function TodoList({ changeWords, setChangeWords }) {
    const[falseClick,setfalseclick]=useState([])

    function handleClick(){
        //setChangeWords([ changeWords.filter((item => item.i === item))])
        //const newList = changeWords.filter( item=> item.i !== i.i);
    
        setfalseclick(changeWords)
        const newList= changeWords.filter(item=>item.id ===item)
        setChangeWords(newList)

    }
    function Endclick(){
        setChangeWords(falseClick)
    }
    function deleteOnClick(index){
      var newList1= changeWords;
      newList1.splice(index,1);
      setChangeWords([...newList1]);
    }



    return (
        <div>
            <ul>
                {changeWords.map((item, index) => (<li key={index}>  <span> {item.name}</span> <button id={index} onClick={()=>deleteOnClick(index)} >x</button> </li>))}

            </ul>
            <div>
                
                <button onClick={handleClick}>all</button>
                <button onClick={Endclick}>end</button>
            </div>
        </div>
    )
}

export default TodoList