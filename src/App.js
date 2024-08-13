import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import "./style.css"

import api from "./services/api";

function App() {

const [input, setInput] = useState('')
const [cep, setCep] = useState({})

async function handleSearch() {

  if(input === ""){
    alert("Preencha o CEP")
    return
  }

  try {

    const response = await api.get(`${input}/json`)
    setCep(response.data)
    setInput("")

    
  } catch (error) {
    
    alert("Ops errooouu")
    setInput("")

  }

}

  return (
    <div className="container">
      <h1 className="title"> Buscando cep </h1>
      
    <div className="container-input">
      <input type="text"
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="search" onClick={handleSearch}>
       <FiSearch size={25} color="#5e5566" />
      </button>
    </div>

{Object.keys(cep).length > 0 && (

    <main className="main">

    <h2> CEP: {cep.cep}</h2>

    <span>{cep.logradouro}</span>
    <span>Complemento: {cep.complemento}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade} = {cep.uf}</span>

    </main>

)}

    </div>
  );
}

export default App;
