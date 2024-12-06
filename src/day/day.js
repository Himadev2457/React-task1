import React, {useState} from 'react'

 function FuncLifeCycle(){
    const [text,setText] =useState(1)

    const increment=()=>{
        setText(text+1)
    }
    const decrement=()=>{
        setText(text-1)
    }
    return(
      <div>
          <h1>{text}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
      </div>
        
    )

}
export default FuncLifeCycle;


