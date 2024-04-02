import { parser } from './utils/parser.js'
import './App.css'

let objFunction = "Z = -2x + 2y\nsujeto a\n2x + y <= 100\nx + 3y <= 80\nx <= 45\ny <= 100"

function App() {
    console.log(  parser(objFunction))
    
    return (
      <>

      </>
  )
}

export default App
