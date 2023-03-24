import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './modules/components/Main/Main'




const App = (props) => {

  return (
    <div className="App">


      <Routes>
        <Route path="*" index element={<Main />} />

      </Routes>
    </div>

  )
}

export default App
