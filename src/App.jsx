import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Category from './Components//Category';
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
    </>
    
  )
}

export default App
