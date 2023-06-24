import { IColor } from "../Models/IColor"

interface ColorsPresentationProps {
    userColor: string,
    userColorStyle: React.CSSProperties;
    getName: (userColor: string) => { hex: string, name: string; contrast: string };
    resetBtn: () => void;
    response: IColor[];
}


export const ColorsPresentation = ({userColor, userColorStyle, getName, resetBtn, response }: ColorsPresentationProps) => {

    const handleClick = (id: string) => {
        console.log('read more about:', id)
      }

    const html = response.map((color) => (
        <div key={color.hex.value}>
          {/* <h4>{color.name.value}</h4> */}
          <div>
            <img src={color.image.named} alt={color.name.value} />
          </div>
        </div>
      ));

    return (
        <>
        <h2>Your color:</h2>
          <div className='user-color' style={userColorStyle}>
            <span className='user-info'>{getName(userColor).hex}</span>
            <span className='user-info'>{getName(userColor).name}</span>
          </div>
          <button onClick={resetBtn}>New Color</button>
          {html}
                //klick på varje del
      <div onClick={() => handleClick(userColor)}>Read more about this color...</div>
              <div>
        {/* <img src={response?}></img> */}
      </div>
        </>
    )
}