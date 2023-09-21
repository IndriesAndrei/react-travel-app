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

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => 
      item.id === id ? {...item, packed: !item.packed} 
      : item
    ))
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLIst items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </>
  )
}

export default App
