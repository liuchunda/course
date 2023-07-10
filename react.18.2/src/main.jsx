console.log('main')
import { createRoot } from 'react-dom/client'
let element = (
  <h1>
    hello <span str="1" style={{ color: 'red' }}>world</span> 111
  </h1>
)
const root = createRoot(document.getElementById("root"))
// root.render(element)
console.log(root)
console.log(element)