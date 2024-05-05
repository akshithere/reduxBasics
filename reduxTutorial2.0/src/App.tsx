import "./App.css"
import Feed from "./features/feed/Feed"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
       
        {/* <Quotes /> */}
        <Feed />
       
      </header>
    </div>
  )
}

export default App
