import React, { useState } from 'react'

function Todo({changeWords, setChangeWords} ) {
    const [word,setWord]=useState([]);
    function changeWord(e){
        setWord(e.target.value)
    }
    function submit(e){
        e.preventDefault()

        if (word==="") {
            return false
        }
        setChangeWords([...changeWords, {id: Date.now(), name:word, tamamlandı:false}])
        setWord("")
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input value={word} onChange={changeWord}   placeholder='what needs to be done?'/>
          
        </form>
    </div>
  )
}

export default Todo