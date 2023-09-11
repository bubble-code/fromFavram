import { useRef, useState } from 'react'
import { useFetchData } from "./hook/fetchhook"
import './App.css'


function App() {
  const refInput = useRef(null)
  const { data = [{}], error, loading, setQuery } = useFetchData('¿Como copiar articulos?')

  const handleQuery = () => {
    let question = refInput.current.value
    setQuery(question)
  }

  if (loading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  if (data) {
    return <div>
      <div style={{ display: 'flex', gap: '14px' }}>
        <input type="text" style={{ width: '350px' }} ref={refInput} />
        <button onClick={handleQuery} style={{ border: '1px solid gray' }}>Nueva Pregunta</button>
      </div>
      {data.map((item, key) => (
        <div key={key + 2} style={{ textAlign: 'justify' }}>
          <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{item.section_name}</p>
          <div>{item.sentence_text}</div>
        </div>
      ))}
    </div>
  }

  return (
    <>

    </>
  )
}

export default App
