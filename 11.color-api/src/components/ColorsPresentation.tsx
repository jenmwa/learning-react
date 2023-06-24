import { useNavigate } from "react-router-dom";
import { IColor } from "../Models/IColor"
import '../style/colorPresentation.css';

interface ColorsPresentationProps {
    userColor: string,
    userColorStyle: React.CSSProperties;
    getName: (userColor: string) => { hex: string, name: string; contrast: string };
    resetBtn: () => void;
    response: IColor[];
}

//https://www.thecolorapi.com/id?format=json&hex=6F1C35

export const ColorsPresentation = ({userColor, userColorStyle, getName, resetBtn, response }: ColorsPresentationProps) => {
  const navigate = useNavigate();

    const handleClick = (id: string) => {
        console.log('read more about:', id);
        id = id.replace('#', '')
        console.log(id)
        navigate('/color/' + id)
      }

    const html = response.map((color) => (
        <div key={color.hex.value} onClick={() => handleClick(color.hex.value)} className="color-container">
          <div className="color-wrapper" style={{backgroundColor: color.hex.value}}>
            <img src={color.image.named} alt={color.name.value} />
          </div>
        </div>
      ));

    return (
        <>
        <h2>Your color:</h2>
          <div className='user-color' style={userColorStyle} onClick={() => handleClick(userColor)}>
            <span className='user-info'>{getName(userColor).hex}</span>
            <span className='user-info'>{getName(userColor).name}</span>
          </div>
          <button onClick={resetBtn}>New Color</button>
          <h4>Show me the color in a monochrome Schema</h4>
          {html}
        </>
    )
}