import { ChangeEvent, FormEvent, useState } from "react"
import '../style/search.scss'

interface IAddProps {
  choosenColor: (textFromUser: string) => void;
}

export const SearchField = ({choosenColor}: IAddProps) => {
    const [userColor, setUserColor] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const inputValue = e.target.value;
    const isEmptyInput = inputValue === "";
    setIsEmpty(isEmptyInput);
    setUserColor(isEmptyInput || inputValue.startsWith('#') ? inputValue : '#' + inputValue);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userColor)
    choosenColor(userColor)
    setUserColor('');
    setIsEmpty(true);
  }

  return <>
  <div className='search-div'>
    <p>Searchfield</p>
    <form onSubmit={handleSubmit}>
      <input type='text'
        onChange={handleChange}
        value={userColor}
          placeholder='#'>
        </input>
      <button disabled={isEmpty}>SEARCH</button>
    </form>
    </div>
  </>
}