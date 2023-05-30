import React, {useState} from 'react'

export default function(){
    const [itens, setItens] = useState([])    
    const [textValue, setTextValue] = useState("")
    const botaoAdd = (e)=>{
        e.preventDefault()
        if(textValue.trim()!==""){
            const newItem = <div className='item'><p>{textValue}</p><input type='checkbox'/></div>
            setItens(prevItens => [...prevItens, newItem])
            setTextValue('')
        }
    }
    return(
    <form>
        <input type="text" placeholder='escreva sua to-do' name="item-lista" value={textValue} onChange={(e) => 
            setTextValue(e.target.value)}/>
        <input onClick={botaoAdd} type='submit' value={"+"}/>
        {itens.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
    </form>
    //emiliozao
)  
}