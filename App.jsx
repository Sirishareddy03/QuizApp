import React from 'react'
import QuizApp from './components/QuizApp'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"

  const App = () => {
    return (
      <>
      {/* navbar start */}
  
      {/* navbar end */}
  
      {/* routing setup start */}
  
      {/* routing setup end */}
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/QuizApp' element={<QuizApp/>}/>
        </Routes>
        
      </>
    )
  }

export default App
