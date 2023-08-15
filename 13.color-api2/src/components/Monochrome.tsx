interface IColorProps {
  color: string;
}

export const Monochrome = ({ color }: IColorProps) => {

  return <>
    <p>Monochrome</p>
    {color}
  </>
}