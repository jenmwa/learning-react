import { useState } from "react"
import { IImage } from "../Models/IImage"
import images from "./imageArray";


export const ImageSlider = () => {

  const [currentImg, setCurrentImg] = useState(0);

  const imageArray: IImage[] = images;

  const prevImg = () => {
    console.log('previous img');
      if(currentImg === 0) {
        setCurrentImg(images.length -1);
      } else {
        setCurrentImg(currentImg -1);
      }
  }

  const nextImg = () => {
    console.log('next img');
    if(currentImg === images.length - 1 ) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg +1);
    }
  }

  return (
    <>
      <section>
        <h2>Image carousel in React!</h2>
        <div className="container">
          {imageArray.map((image, index) =>
          currentImg === index && (
            <div key={image.id} className="slide">
              <img src={image.img} alt={image.alt} width={380}></img>
            </div>
            )
          )}
          <button className="material-symbols-outlined" onClick={prevImg}>
            arrow_back
          </button>
          <button className="material-symbols-outlined" onClick={nextImg}>
            arrow_forward
          </button>
        </div>
      </section>
    </>
  )
}