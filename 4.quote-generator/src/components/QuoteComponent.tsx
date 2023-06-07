import '../style/QuoteComponent.scss';
import { IQuote } from '../Models/IQuote';
import { useState, useEffect } from 'react';
import axios from "axios"

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

  return (
    <>
      <section className='quote-section'></section>
      <button onClick={() => { setRandomQuote(quotes) }}>GET A NEW QUOTE</button>
      <h3>
        <span>“</span>
        {quote?.text}
        <span>“</span>
        {quote?.author}
      </h3>
    </>)
}