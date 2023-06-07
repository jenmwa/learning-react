import '../style/GetApi.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { IProgram } from '../Models/IProgram'
import { ISrResponse } from '../Models/ISrResponse'
import { ProgramPresentation } from './ProgramPresentation'


export const GetApi = () => {

  const [response, setResponse] = useState<ISrResponse | undefined>(undefined);
  const [apiFetched, setApiFetched] = useState(false);

  // const [program, setProgram] = useState<IProgram>();

  //alla program musik
  //https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true

  const getApiBtn = async () => {
    console.log('click click')
    try {
      const response = await axios.get<ISrResponse>('https://api.sr.se/api/v2/programs/index?programcategoryid=5&format=json&pagination=false&indent=true')
      console.log(response.data.programs)
      setResponse(response.data)
      setApiFetched(true);
    } catch (error) {
      console.error('error', error)
    }
  }

  const resetBtn = () => {
    console.log('click reset')
    setApiFetched(false);
    setResponse(undefined);
  }

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
      <h2>Let's get all the programs in the music category!</h2>
      {/* visa först getApiBtn, när denna har clickats och program visas, visa reset. */}
      <button onClick={getApiBtn}>CLICK HERE TO GET THEM</button>
      <button onClick={resetBtn}>CLICK HERE TO RESET</button>
      <div className="div-container">
      {/* {response && (
        <p>{JSON.stringify(response, null, 2)}</p>
      )} */}
      </div>
      {response && <ProgramPresentation programs={response?.programs}/>}
    </>
  )
}