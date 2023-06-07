
import { ISrResponse } from "../Models/ISrResponse";
import '../style/ProgramPresentation.scss'



export const ProgramPresentation = ({ programs }: ISrResponse) => {
  console.log(programs)

  const gotoSrBtn = (programurl: string) => {
    console.log(programurl)
    window.open(programurl, '_blank', 'noopener')
  }

  const html = programs.map((program) => {
    return (
      <div className="program-container" key={program.id}>
        <div className="img-wrapper">
          <img
            className="program-img"
            src={program.programimage}
            width="380"
            alt={program.name}
          ></img>
        </div>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <span>{program.broadcastinfo}</span>
        <span>{program.channel.name !== '[No channel]' ? program.channel.name : 'sr.se'}</span>
          <button onClick={() => {gotoSrBtn(program.programurl)}}
          >Gå till programsidan</button>
 
      </div>
    )

  })


  return (
    <>
      {/* \\ This is our child component // */}
      {html}
      {/* <div>
      {programs.map((program) => (
        <p key={program.id}>{program.name}</p>
      ))}
    </div> */}
    </>
  )
}