
import { useState } from 'react'
import './App.css'
import { Color } from './components/Color'
import { Monochrome } from './components/Monochrome'
import { SearchField } from './components/SearchField'
import { ShowColorDetails } from './components/ShowColorDeatails'



function App() {
  const [color, setColor] = useState('')

  const choosenColor = (choosenColor: string) => {
    setColor(choosenColor)
    console.log('your color is: ' + choosenColor)
  }

  console.log('your color is: ' + color)

  return (
    <>
    <h1>Get your color!</h1>
    <SearchField choosenColor={choosenColor}></SearchField>
    <Color color={color}></Color>
    <ShowColorDetails></ShowColorDetails>
    <Monochrome color={color}></Monochrome>
    </>
  )
}

export default App
