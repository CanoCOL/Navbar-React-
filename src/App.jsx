import { useState } from 'react'

import { Vista } from './components/Vista/Vista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Vista/>
    </>
  )
}

export default App
