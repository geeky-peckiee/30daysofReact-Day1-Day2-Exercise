import React from 'react';
import './App.css'

const App = () => {
  // A JSX element is a javascript syntax extension that allows us to write
// html and javascript together
const name = <p>Peculiar Ogede</p>;
const user = (<div className='userSection'>
  <h1>Peculiar Ogede</h1>
  <p>Nigeria</p>
  <p>Miss</p>
  <p>Female</p>
  <p>peculiar@gmail.com</p>
  <p>0463830047</p>
  </div>
)
let age = 'i don\'t know';
const footer = <footer className='footer'>Copyright @Day2</footer>
  return (
    <div>
      {/* {name} */}
      {user}
      {/* {age} */}
      {footer}
    </div>
  )
}
export default App;