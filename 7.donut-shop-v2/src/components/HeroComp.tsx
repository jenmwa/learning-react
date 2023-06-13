import heroImg from '/pexels-karley-saagi-2801980.jpg'
import '../style/HeroComp.scss';

export const HeroComp = () => {

  return <>
    <div className="hero-container" style= {{backgroundImage: `url(${heroImg})`}}>
      {/* <img src={heroImg}></img> */}
    </div>

  </>
}