import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MovieGalary from './MovieGalary'
import Display from './Display'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieGalary />} />
          <Route path='/:id' element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App