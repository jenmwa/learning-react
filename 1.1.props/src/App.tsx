
import { RecieverOfData } from './components/RecieverOfData'
import './App.css'
import { useState } from 'react'
import { ChildComp } from './components/ChildComp'
import { ChildComps } from './components/ChildComps'
import { Input } from './components/Input'
import { ShowInput } from './components/ShowInput'

export class Icecream {
  constructor(
    public flavor: string,
    public price: number,
    public available: boolean
  ) { }
}

export interface IIcecream {
  id: number,
  flavor: string,
  price: number,
  available: boolean
}

export class Wishcream {
  constructor (
  public id: number,
  public flavor: string,
  ) {}
}

function App() {
  const [wishFlavors, setWishFlavors] = useState<Wishcream[]>([])
  const [text, setText] = useState('en text')

  const icecreams:IIcecream[] = [
    {id: 1, flavor: 'vanilla', price: 10, available: true}, 
    {id: 2, flavor: 'hazelnut', price: 15, available: true}, 
    {id: 3, flavor: 'orange', price: 12, available: false}, 
  ]

  const icecream = new Icecream('strawberry', 11, true);

  const addFlavor = (text: string) => {
    setWishFlavors([...wishFlavors, new Wishcream(new Date().getTime(), text) ])
  }

  return (
    <>
    <Input addFlavor={addFlavor}></Input>
    <ShowInput wishFlavors={wishFlavors}></ShowInput>
      {/* <RecieverOfData text='en annan text' numb={8} bool={true} ></RecieverOfData> */}
      <ChildComp icecream={icecream}></ChildComp>
      <ChildComps icecreams={icecreams}></ChildComps>
      <RecieverOfData text={text} numb={8} bool={true} ></RecieverOfData>
      <RecieverOfData text={text} numb={8} bool={false} ></RecieverOfData>
    </>
  )
}

export default App
