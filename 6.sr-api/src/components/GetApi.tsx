import '../style/GetApi.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProgram } from '../Models/IProgram'
import { ISrResponse } from '../Models/ISrResponse'


export const GetApi = () => {

  const [response, setResponse] = useState<ISrResponse | null> (null);
  // const [program, setProgram] = useState<IProgram>();


  //alla program musik
  //https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<ISrResponse>('https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true')
        console.log(response.data.programs)
        setResponse(response.data)
      }
      catch (error) {
        console.error('error', error)
      }
    }
    getData()

  }, []);

  return (
    <>
      Let's get all the programs in the music category!
      <div className="div-container">
      {response && (
        <p>{JSON.stringify(response, null, 2)}</p>
      )}
      </div>
    </>
  )
}