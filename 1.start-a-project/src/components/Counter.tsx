import { useState } from 'react';
import '../style/Counter.css'

export const Counter = () => {

  const numberOne = 4;
  const numberTwo = 5;

  const [number, setNumber] = useState(numberOne)

  function myFunction() {
    console.log('click on Button')
    // setNumber(numberTwo);
    setNumber(
      prevNumber => (prevNumber === numberOne ? numberTwo : numberOne)
    )
  }

  function getInputs() {
    const text1: HTMLInputElement | null = document.querySelector('#text1');
    const text2: HTMLInputElement | null = document.querySelector('#text2');

    console.log(text1?.value, text2?.value);
    const result: HTMLElement | null = document.querySelector('#result');
    if(result){
      const value1 = text1?.value ?? '';
      const value2 = text2?.value ?? '';
      result.innerHTML = '🎉🎉🎉 <br/>' + value1 +' ' + value2; 
    } else {
      return;
    }
  }

  const numbers = [1, 1, 2, 3, 5, 8, 13];

  const lis: JSX.Element[] = numbers.map((number, index) => {
    return <li key={index}>{number}</li>
  })

  interface IPersons {
    id: number,
    name: string,
    age: number,
    isMarried: boolean,
  }

  const persons: IPersons[] = [
    {id: 1, name: 'Jenny', age:37, isMarried: false},
    {id: 2, name: 'Unni', age:4, isMarried: false},
    {id: 3, name: 'Hanna', age:35, isMarried: false},
  ];
  console.log(persons)

  const personas: JSX.Element[] = persons.map((person) => {
    const textColor = person.age < 10 ? 'lightpink' : 'lightgreen';
    return (
    <p key ={person.id} style={{ color: textColor }}>{person.name}, {person.age}</p>)
  })
  
  return <>
    <div className="container">
      <p>testing variable numberOne: <span className="variable">{numberOne}</span> & numberTwo: <span className="variable">{numberTwo}</span>.</p>
      <p>-----------------------------------------------</p>
      <p>Let's click and toggle between our numbers! 🎉</p>
      <button onClick={myFunction}>{number}</button>
      <p>-----------------------------------------------</p>
      <input type="text" id="text1" placeholder="Write Something"></input>
      <input type="text" id="text2" placeholder="Write Something else"></input>
      <button className="somethingBtn" onClick={getInputs}>CLICK HERE</button>
      <p className="result" id="result"></p>
    </div>
    <p>-----------------------------------------------</p>
    <p>A rendered list with numberes:</p>
    <ul>{lis}</ul>
    <p>-----------------------------------------------</p>
    <p>And this is a rendered list with persons and dependable on their age, rendered in pink or green:</p>
    <div>{personas}</div>
  </>
}

export default Counter;