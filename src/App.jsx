import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingLIst from './components/PackingList'
import Stats from './components/Stats'



function App() {
  const [items, setItems] = useState([]);
  
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLIst items={items} />
      <Stats />
    </>
  )
}

export default App
