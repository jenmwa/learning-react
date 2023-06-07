import '../style/GetApi.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ISrResponse } from '../Models/ISrResponse'
import { ProgramPresentation } from './ProgramPresentation'


export const GetApi = () => {

  const [response, setResponse] = useState<ISrResponse | undefined>(undefined);
  const [apiSuccess, setApiSuccess] = useState(false);

  //alla program musik
  //https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true

  const getApiBtn = async () => {
    console.log('click click')
    if (!apiSuccess) {
      try {
        const response = await axios.get<ISrResponse>('https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true')
        console.log(response.data.programs)
        setResponse(response.data)
        setApiSuccess(true);
      } catch (error) {
        console.error('error', error)
      }
    }
    else {
      console.log('click reset')
      // setRendered(false);
      setApiSuccess(false);
      setResponse(undefined);
    }
  }


  // const resetBtn = () => {
  //   console.log('click reset')
  //   setResponse(undefined);
  // }

  // // rendera från start
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get<ISrResponse>('https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true')
  //       console.log(response.data.programs)
  //       setResponse(response.data)
  //     }
  //     catch (error) {
  //       console.error('error', error)
  //     }
  //   }
  //   getData()
  // }, []);

  return (
    <>
      <div className="div-container">
        <h2>{( !apiSuccess) ? 'Vad sägs om att hämta alla program i kategori Musik?' : 'Hittar du något intressant?'}</h2>

        <button className="getreset-btn" onClick={getApiBtn}>{( !apiSuccess) ? 'HÄMTA' : 'NOLLSTÄLL'}</button>
        {/* <button onClick={resetBtn}>CLICK HERE TO RESET</button> */}

      </div>
      {response && <ProgramPresentation programs={response?.programs} />}
    </>
  )
}