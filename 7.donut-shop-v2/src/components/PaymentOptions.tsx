import { ChangeEvent, useState } from "react"


export const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('card');

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  }

  return (
    <>
      <fieldset>
        <legend>Payment Options:</legend>

        <label>
          <input 
            type='radio'
            className='paymentOptions'
            name='card'
            value='card'
            checked={selectedOption === 'card'}
            onChange={handleOptionChange}
          ></input>
          <span>Card</span>
        </label>

        <label>
          <input 
            type='radio'
            className='paymentOptions'
            name='invoice'
            value='invoice'
            checked={selectedOption === 'invoice'}
            onChange={handleOptionChange}
          ></input>
          <span>Invoice</span>
        </label>

      </fieldset>
    </>
  )

}