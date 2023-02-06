import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const url = "https://cdn.fs.teachablecdn.com/jXxMUj86Qf2pChV37EzI"
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url).then(data => data.json()).then(setItems)
  }, [])


  return (
    <div>
      { items.map(item => item.title) }
    </div>
  )
}

export default App;
