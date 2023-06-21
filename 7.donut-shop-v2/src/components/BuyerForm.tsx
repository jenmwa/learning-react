import { ChangeEvent, FormEvent, useState } from "react"
import { Buyer } from "../Models/Buyer"
import '../style/buyerform.scss';
import { PaymentOptions } from "./PaymentOptions";

interface IBuyerFormProps {
  handleSave: (buyer: Buyer) => void;
}

export const BuyerForm = ({ handleSave }: IBuyerFormProps) => {

  const [buyer, setBuyer] = useState<Buyer>({
    firstName: '',
    lastName: '',
    adress: {
      street: '',
      zip: 0,
      city: '',
    },
    email: '',
    phone: 0,
    newsletter: false,
    terms: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    console.log(name);

    if (e.target.type === 'number') {
      setBuyer({ ...buyer, [name]: Number(e.target.value) });
    }
    else if (e.target.type === 'checkbox') {
      setBuyer({ ...buyer, [name]: e.target.checked })
    }
    else {
      setBuyer({ ...buyer, [name]: e.target.value })
    }
  }

  const handleAdressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (e.target.type === 'number') {
      setBuyer({
        ...buyer,
        adress: { ...buyer.adress, [name]: Number(e.target.value) },
      })
    }
    else {
      setBuyer({
        ...buyer,
        adress: { ...buyer.adress, [name]: e.target.value },
      })
    }


  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSave(buyer);
    console.log('buyer is registrered and have ordered!')
  }

  return <>
    <h3>Your registration:</h3>
//show ordersummary
    <form onSubmit={handleSubmit}>

      <label>
        Firstname:
        <p className='errorMsg'></p>
        <input
          type="text"
          value={buyer.firstName}
          onChange={handleChange}
          name='firstName'>
        </input>
      </label>

      <label>
        Lastname:
        <p className='errorMsg'></p>
        <input
          type="text"
          value={buyer.lastName}
          onChange={handleChange}
          name='lastName'>
        </input>
      </label>

      <label>
        Street:
        <p className='errorMsg'></p>
        <input
          type="text"
          value={buyer.adress.street}
          onChange={handleAdressChange}
          name='street'>
        </input>
      </label>


      <label>
        Zip:
        <span className='errorMsg'></span><br></br>
        <input
          type="text"
          value={buyer.adress.zip}
          onChange={handleAdressChange}
          name='zip'>
        </input>
      </label>

      <label>
        City:
        <span className='errorMsg'></span><br></br>
        <input
          type="text"
          value={buyer.adress.city}
          onChange={handleAdressChange}
          name='city'>
        </input>
      </label>

      <label>
        Email:
        <span className='errorMsg'></span><br></br>
        <input
          type="text"
          value={buyer.email}
          onChange={handleChange}
          name='email'>
        </input>
      </label>

      <label>
        <span>Phone:</span>
        <span className='errorMsg'></span><br></br>
        <input
          type="phone"
          value={buyer.phone}
          onChange={handleChange}
          name='phone'>
        </input>
      </label>

      <PaymentOptions></PaymentOptions>

      <label>
        <span>Newsletter</span>
        <input
          type="checkbox"
          checked={buyer.newsletter}
          onChange={handleChange}
          name='newsletter'>
        </input>
      </label>

      <label>
        I accept the terms
        <input
          type="checkbox"
          checked={buyer.terms}
          onChange={handleChange}
          name='terms'>
        </input>
      </label>

      <button>Reset</button>
      <button>BUY</button>
    </form>
    <p>{JSON.stringify(buyer)}</p>

  </>


}