import '../style/QuoteComponent.scss';
import { IQuote } from '../Models/IQuote';
import { useState, useEffect } from 'react';
import axios from "axios";

export const QuoteComponent = () => {

  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [quote, setQuote] = useState<IQuote>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<IQuote[]>('https://type.fit/api/quotes'
        )
        console.log(response.data[0])
        setQuotes(response.data)
        setRandomQuote(response.data);
      }
      catch (error) {
        console.error('error', error)
      }
    }

    getData();
  }, []);

  const setRandomQuote = (quotes: IQuote[]) => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote])
  }

  function todaysDate () {
    const today = new Date().toLocaleDateString();
    // const day = today.getDate().toLocaleString();
    return today;
  }

  return (
    <>
      <section className='quote-section'>
        <p>{todaysDate()}</p>
      <h2>Random Quote for your Day:</h2>
      <h3 className="quote-text">
        <span>“</span>
        {quote?.text}
        <span>“</span>
      </h3>
      <p className="quote-author">{quote?.author ? quote.author : 'Unknown'}</p>
      </section>

      <button onClick={() => { setRandomQuote(quotes) }}>GET A NEW QUOTE</button>
    </>)
}